import AllMediaSection from '@/components/sections/all-media'
import ContactSection from '@/components/sections/contacts'
import PageHeader from '@/components/ui/page-header'
import React from 'react'

const Contacts = () => {
    return (
        <div className='min-h-screen'>
            <PageHeader title="contacts" description="Get in touch with me" />

            <ContactSection header={false} />

            <AllMediaSection />
        </div>
    )
}

export default Contacts