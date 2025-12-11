'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal, X, BookOpen } from 'lucide-react';
import { CLIPlaygroundProps } from '@/types/project';

const CLIPlayground = ({ commands, projectTitle, installCommand, githubUrl, onClose, onOpenReadme }: CLIPlaygroundProps) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<Array<{ type: 'command' | 'output' | 'error'; text: string }>>([
        { type: 'output', text: `Welcome to ${projectTitle} playground!` },
        { type: 'output', text: 'Type "help" to see available commands or click "View Docs" for full documentation.' },
        { type: 'output', text: '---' }
    ]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const outputRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [history]);

    const processCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        if (!trimmedCmd) return;

        // Add command to history
        setHistory(prev => [...prev, { type: 'command', text: `$ ${cmd}` }]);
        setCommandHistory(prev => [...prev, cmd]);
        setHistoryIndex(-1);

        // Process commands
        if (trimmedCmd === 'help') {
            setHistory(prev => [
                ...prev,
                { type: 'output', text: 'Available commands:' },
                { type: 'output', text: '---' },
                ...commands.map(c => ({ type: 'output' as const, text: `  ${c.command}` })),
                { type: 'output', text: '' },
                { type: 'output', text: 'Other commands:' },
                { type: 'output', text: '  help - Show this help message' },
                { type: 'output', text: '  clear - Clear terminal' },
                { type: 'output', text: '  install - Show installation command' },
                { type: 'output', text: '  docs - View full documentation' },
                { type: 'output', text: '---' }
            ]);
        } else if (trimmedCmd === 'clear') {
            setHistory([
                { type: 'output', text: `Welcome to ${projectTitle} playground!` },
                { type: 'output', text: 'Type "help" to see available commands.' },
                { type: 'output', text: '---' }
            ]);
        } else if (trimmedCmd === 'install') {
            if (installCommand) {
                setHistory(prev => [
                    ...prev,
                    { type: 'output', text: `Installation command:` },
                    { type: 'output', text: `  ${installCommand}` },
                    { type: 'output', text: '---' }
                ]);
            } else {
                setHistory(prev => [...prev, { type: 'error', text: 'No installation command available.' }]);
            }
        } else if (trimmedCmd === 'docs') {
            setHistory(prev => [
                ...prev,
                { type: 'output', text: 'Opening documentation...' },
                { type: 'output', text: 'Click the "View Docs" button at the top to view full documentation.' },
                { type: 'output', text: '---' }
            ]);
            if (onOpenReadme) {
                setTimeout(() => onOpenReadme(), 500);
            }
        } else {
            // Check if command matches any available commands
            const matchedCommand = commands.find(c =>
                trimmedCmd.startsWith(c.command.toLowerCase().split('[')[0].trim())
            );

            if (matchedCommand) {
                setHistory(prev => [
                    ...prev,
                    { type: 'output', text: `✓ Executing: ${matchedCommand.command}` },
                    { type: 'output', text: `Description: ${matchedCommand.description}` },
                    { type: 'output', text: `Example: ${matchedCommand.example}` },
                    { type: 'output', text: '✓ Command completed successfully!' },
                    { type: 'output', text: '---' }
                ]);
            } else {
                setHistory(prev => [
                    ...prev,
                    { type: 'error', text: `Command not found: ${cmd}` },
                    { type: 'error', text: 'Type "help" to see available commands.' },
                    { type: 'output', text: '---' }
                ]);
            }
        }

        setInput('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            processCommand(input);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex !== -1) {
                const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'l' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            processCommand('clear');
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-6xl h-[80vh] bg-[#1e1e1e] border border-gray/70 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray/70 bg-[#252526]">
                    <div className="flex items-center gap-2">
                        <Terminal size={20} className="text-primary" />
                        <span className="text-white font-medium">{projectTitle} - Playground</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {onOpenReadme && (
                            <button
                                onClick={onOpenReadme}
                                className="flex items-center gap-2 text-gray hover:text-primary transition-colors px-3 py-1 border border-gray/50 hover:border-primary text-sm"
                            >
                                <BookOpen size={16} />
                                View Docs
                            </button>
                        )}
                        <button
                            onClick={onClose}
                            className="text-gray hover:text-white transition-colors"
                            aria-label="Close playground"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Terminal Output */}
                <div
                    ref={outputRef}
                    className="flex-1 overflow-y-auto p-4 font-mono text-sm"
                >
                    {history.map((entry, index) => (
                        <div
                            key={index}
                            className={`mb-1 ${entry.type === 'command'
                                ? 'text-primary'
                                : entry.type === 'error'
                                    ? 'text-red-400'
                                    : 'text-gray'
                                }`}
                        >
                            {entry.text}
                        </div>
                    ))}
                </div>

                {/* Input Line */}
                <div className="border-t border-gray/70 bg-[#252526] p-4">
                    <div className="flex items-center gap-2 font-mono text-sm">
                        <span className="text-primary">$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent text-white outline-none"
                            placeholder="Type a command..."
                            autoFocus
                        />
                    </div>
                </div>

                {/* Footer Hint */}
                <div className="px-4 py-2 bg-[#1e1e1e] border-t border-gray/70 text-xs text-gray">
                    <span className="mr-4">Press Enter to execute</span>
                    <span className="mr-4">↑↓ for history</span>
                    <span className="mr-4">Ctrl+L to clear</span>
                    <span>Type "docs" for documentation</span>
                </div>
            </div>
        </div>
    );
};

export default CLIPlayground;