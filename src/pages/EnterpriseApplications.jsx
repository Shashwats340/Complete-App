import React, { useState } from 'react';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import EnterpriseServices from '../components/EnterpriseServices';
import './EnterpriseApplications.css';

import dyn365 from '../assets/ERP/Microsoft_Dynamics_365_Logo_(2021–present).svg.png';
import netsuite from '../assets/ERP/NetSuite-Logo.png';
import oracleAnalytics from '../assets/ERP/1680098450_Oracle_Analytics-Cloud_cmyk.png';
import oracleEb from '../assets/ERP/211-2113842_oracle-e-business-suite-integration-solutions-oracle-crm.png';
import sapEcc from '../assets/ERP/SAP ECC logo.png';
import sapS4 from '../assets/ERP/d7fbbb558404b50a09b80f7d7b7d99ea.png';

// CRM
import hubspot from '../assets/CRM/hubspot-inc-business-logo-inbound-marketing-portable-network-graphics-business.png';
import workday from '../assets/CRM/png-clipart-logo-workday-inc-enterprise-resource-planning-financial-management-human-resource-text-cloud.png';
import salesforce from '../assets/CRM/salesforce-transparent-logo-115525063493207zrqpiz.png';
import dyn365Crm from '../assets/CRM/585-5857242_microsoft-dynamics-microsoft-dynamics-365-logo-hd-png.png';

// Integration
import mulesoft from '../assets/Integration and Middlewaer/MuleSoft-Logo.wine.png';
import boomi from '../assets/Integration and Middlewaer/boomi-logo-web-certification-1.png';
import workato from '../assets/Integration and Middlewaer/workato-logo-1.png';
import oic from '../assets/Integration and Middlewaer/img-oracle-integration-cloud-1x.png';
import servicenow from '../assets/Integration and Middlewaer/but-disconnected-systems-and-processes-hold-your-customer-servicenow-logo-115629671508wfpjptb5z.png';
import powerPlatform from '../assets/Integration and Middlewaer/Logo-Microsoft-Power-Platform-_1.webp';
import sharepoint from '../assets/Integration and Middlewaer/1_28J2QkIoi0NYsY1ig0Iq2A.png';

// Cloud
import aws from '../assets/Cloud Infrastructure and modernization/Amazon_Web_Services_Logo.png';
import gcp from '../assets/Cloud Infrastructure and modernization/Google-Cloud-Platform-GCP-Logo.png';
import ibmCloud from '../assets/Cloud Infrastructure and modernization/IBM Cloud.png';
import oracleCloud from '../assets/Cloud Infrastructure and modernization/Oracle-Cloud-Emblem.png';
import azure from '../assets/Cloud Infrastructure and modernization/microsoft-azure-logo.png';

// App Dev
import java from '../assets/App Development/java-eps-vector-logo-download-free-11574097023vsqnftopfe.png';
import dotnet from '../assets/App Development/218-2180127_net-training-indore-dot-net-logo-png.png';
import nodejs from '../assets/App Development/546-5460201_node-js-logo-png-transparent-png.png';
import python from '../assets/App Development/python-logo-vector-download-free-11574197219exgflzvtyd.png';
import reactIcon from '../assets/App Development/524-5245981_react-js-logo-png-transparent-png-download.png';
import angular from '../assets/App Development/angular_wordmark_gradient.png';
import vuejs from '../assets/App Development/png-clipart-vue-js-logo-landscape-tech-companies.png';
import nextjs from '../assets/App Development/next-js-logo-png_seeklogo-321806.png';
import enterpriseBg from '../assets/Enterprise Applicatoin.png';

const techCategories = [
    {
        title: "ERP & Core Business Platforms",
        type: "logos",
        items: [
            { name: "Dynamics 365", logo: dyn365 },
            { name: "NetSuite", logo: netsuite },
            { name: "Oracle Analytics Cloud", logo: oracleAnalytics },
            { name: "Oracle E-Business Suite", logo: oracleEb },
            { name: "Workday", logo: workday },
            { name: "SAP ECC", logo: sapEcc },
            { name: "SAP S/4HANA", logo: sapS4 }
        ]
    },
    {
        title: "CRM & Customer Platforms",
        type: "logos",
        items: [
            { name: "Dynamics 365", logo: dyn365Crm },
            { name: "HubSpot", logo: hubspot },
            { name: "Workday", logo: workday },
            { name: "Salesforce", logo: salesforce }
        ]
    },
    {
        title: "Integration, Middleware & Automation",
        type: "sections",
        sections: [
            {
                subtitle: "Integration:",
                items: [
                    { name: "MuleSoft", logo: mulesoft },
                    { name: "Boomi", logo: boomi },
                    { name: "Workato", logo: workato },
                    { name: "OIC", logo: oic }
                ]
            },
            {
                subtitle: "Automation / RPA:",
                items: [
                    { name: "ServiceNow", logo: servicenow },
                    { name: "Power Platform", logo: powerPlatform },
                    { name: "SharePoint", logo: sharepoint }
                ]
            }
        ]
    },
    {
        title: "Cloud, Infrastructure & Modernization",
        type: "sections",
        sections: [
            {
                subtitle: "Cloud Platforms:",
                logos: [
                    { name: "AWS", logo: aws },
                    { name: "GCP", logo: gcp },
                    { name: "IBM Cloud", logo: ibmCloud },
                    { name: "Azure", logo: azure },
                    { name: "Oracle Cloud", logo: oracleCloud }
                ]
            },
            {
                subtitle: "Legacy Modernization:",
                items: [
                    { name: "Mainframe", text: "Mainframe" },
                    { name: "AS400 / iSeries", text: "AS400 / iSeries" },
                    { name: "COBOL", text: "COBOL" }
                ]
            }
        ]
    },
    {
        title: "Application Engineering & Development",
        type: "sections",
        sections: [
            {
                subtitle: "Backend",
                items: [
                    { name: "Java", logo: java },
                    { name: "DotNet", logo: dotnet },
                    { name: "Node.js", logo: nodejs },
                    { name: "Python", logo: python }
                ]
            },
            {
                subtitle: "Frontend",
                items: [
                    { name: "React", logo: reactIcon },
                    { name: "Angular", logo: angular },
                    { name: "Vue.js", logo: vuejs },
                    { name: "Next.js", logo: nextjs }
                ]
            },
            {
                subtitle: "Cloud-Native",
                items: [
                    { name: "Docker", text: "Docker" },
                    { name: "Kubernetes", text: "Kubernetes" },
                    { name: "Microservices", text: "Microservices" }
                ]
            }
        ]
    }
];

const EnterpriseApplications = () => {
    const [activeTechTab, setActiveTechTab] = useState(0);

    return (
        <div className="enterprise-page">
            <Hero
                eyebrow="Enterprise Applications"
                title="Systems That Run Your Business—Built to Evolve With It."
                subtitle="Enterprise applications are the operational backbone of every large organization. When they work well, they're invisible. When they don't, everything slows down. Connexials designs, implements, customizes, and manages enterprise application ecosystems that drive efficiency, enable growth, and adapt gracefully as your business evolves."
                backgroundImage={enterpriseBg}
                className="premium-hero"
            />

            <EnterpriseServices />

            {/* Technologies We Work With Section */}
            <section className="ent-tech-section">
                <div className="ent-tech-header">
                    <h2 className="ent-tech-title">Technologies We Work With</h2>
                    <p className="ent-tech-subtitle">
                        Are your data insights translating into customer engagement and ROI? We
                        design, audit, and scale experimentation programs that use statistical rigor,
                        clear business objectives, and the right tools to unlock incremental revenue.
                    </p>
                </div>

                <div className="ent-tech-container">
                    <div className="ent-tech-sidebar">
                        {techCategories.map((category, index) => (
                            <button
                                key={index}
                                className={`ent-tech-tab ${activeTechTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTechTab(index)}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>

                    <div className="ent-tech-content">
                        {techCategories[activeTechTab].type === 'logos' ? (
                            <div className="ent-tech-grid">
                                {techCategories[activeTechTab].items.map((item, idx) => (
                                    <div key={idx} className="ent-tech-item-logo">
                                        <img src={item.logo} alt={item.name} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="ent-tech-sections">
                                {techCategories[activeTechTab].sections.map((section, sIdx) => (
                                    <div key={sIdx} className="ent-tech-section-group">
                                        <h4 className="ent-tech-subheader">{section.subtitle}</h4>
                                        <div className="ent-tech-list-container">
                                            {section.items && (
                                                <div className={`ent-tech-grid ${section.subtitle === 'Cloud-Native' ? 'text-row' : ''}`}>
                                                    {section.items.map((item, iIdx) => (
                                                        <div key={iIdx} className={item.logo ? "ent-tech-item-logo" : "ent-tech-item-text"}>
                                                            {item.logo ? (
                                                                <img src={item.logo} alt={item.name} />
                                                            ) : (
                                                                <span>{item.text}</span>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            {section.logos && (
                                                <div className="ent-tech-grid logos-row">
                                                    {section.logos.map((logoItem, lIdx) => (
                                                        <div key={lIdx} className="ent-tech-item-logo">
                                                            <img src={logoItem.logo} alt={logoItem.name} />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default EnterpriseApplications;
