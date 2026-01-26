import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {

    const servicesData = [
        {
            title : 'Advertising',
            description : ' We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.ads_icon
        },
        {
            title : 'Content Marketing',
            description : ' We help you execute your plan and deliver results...',
            icon: assets.marketing_icon
        },
        {
            title: 'Brand Strategy',
            description: 'We craft clear brand identities that communicate your values and set you apart...',
            icon: assets.marketing_icon
        },
        {
            title: 'UI/UX Design',
            description: 'We design intuitive, user-focused interfaces that enhance engagement and usability...',
            icon: assets.menu_icon
        },
        {
            title: 'Web Development',
            description: 'We build fast, scalable, and secure websites tailored to your business needs...',
            icon: assets.content_icon
        },
        {
            title: 'SEO Optimization',
            description: 'We optimize your online presence to improve search visibility and drive organic traffic...',
            icon: assets.seo_icon
        },
        {
            title: 'Social Media Management',
            description: 'We grow and manage your social platforms to build meaningful audience connections...',
            icon: assets.social_icon
        },
        {
            title: 'Email Marketing',
            description: 'We create targeted email campaigns that convert leads into loyal customers...',
            icon: assets.email_icon
        },
        {
            title: 'Analytics & Insights',
            description: 'We track performance data and turn insights into smarter business decisions...',
            icon: assets.analytics_icon
        }

    ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4
    sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} alt='' className='absolute -top-110 -left-70 -z-1 dark:hidden'/>
        <Title title='How can we help?' desc='From solutions that move your
        business forward.'/>
        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service, index)=>(
                <ServiceCard key={index} service={service} index={index}/>
            ))}
        </div>
    </div>
  )
}

export default Services