import React from 'react';
import { ShieldCheck, CalendarCheck, FileText, BellRing, Users, Settings, BarChart2 } from 'lucide-react';

const features = [
  {
    icon: <CalendarCheck className="w-8 h-8 text-indigo-600" />,
    title: 'Inspection Scheduling & Automation',
    description:
      'Easily plan, assign, and automate inspections using dynamic schedules and recurring tasks. Never miss a check.',
  },
  {
    icon: <FileText className="w-8 h-8 text-indigo-600" />,
    title: 'Customizable Checklists',
    description:
      'Create and manage detailed checklists for safety audits, quality control, and more with industry-wide flexibility.',
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-indigo-600" />,
    title: 'Real-time Reporting & Dashboards',
    description:
      'Live insights, performance metrics, and compliance trends help in smarter, faster decision-making.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    title: 'Secure Document Management',
    description:
      'All data, certificates, and reports are securely stored in the cloud — always accessible and tamper-proof.',
  },
  {
    icon: <BellRing className="w-8 h-8 text-indigo-600" />,
    title: 'Notifications & Alerts',
    description:
      'Receive timely alerts for upcoming inspections, expiring certificates, and overdue tasks.',
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    title: 'User Roles & Access Control',
    description:
      'Assign permissions, manage user roles, and ensure secure access for teams, departments, and external auditors.',
  },
  {
    icon: <Settings className="w-8 h-8 text-indigo-600" />,
    title: 'Audit Trail & Compliance Logs',
    description:
      'Every activity is tracked with a comprehensive audit log for full regulatory transparency.',
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-20" id="features">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Powerful Features</h2>
        <p className="text-lg text-gray-600 mb-12">
          Everything you need to streamline your inspection process — all in one intelligent platform.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
