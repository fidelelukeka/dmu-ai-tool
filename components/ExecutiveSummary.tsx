import React from 'react';
import { MapPin, Calendar, CheckCircle2, AlertCircle, Users, ShieldCheck, HeartPulse } from 'lucide-react';
import { MODULES, REPORT_META } from '../constants';

export const ExecutiveSummary: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Hero Card */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <div className="flex items-center space-x-2 text-primary-100 mb-2">
              <span className="bg-white/20 px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider">Jour 1</span>
              <span className="flex items-center text-xs"><Calendar className="w-3 h-3 mr-1" /> {REPORT_META.date}</span>
              <span className="flex items-center text-xs"><MapPin className="w-3 h-3 mr-1" /> {REPORT_META.location}</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">{REPORT_META.title}</h2>
            <p className="text-lg text-white/90">{REPORT_META.subtitle}</p>
          </div>
          <div className="mt-6 md:mt-0 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <p className="text-xs text-gray-200 uppercase tracking-wider font-bold mb-1">Organisé par</p>
            <div className="flex space-x-2">
              {REPORT_META.organizers.map(org => (
                <span key={org} className="bg-white text-primary px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  {org}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Intro Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:col-span-2">
           <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <ShieldCheck className="w-6 h-6 text-primary mr-2" />
            Le Dispositif Minimum d'Urgence (DMU)
           </h3>
           <p className="text-gray-600 mb-4 leading-relaxed">
             Le DMU est défini comme un ensemble coordonné d'activités prioritaires vitales à mettre en œuvre dès le début d'une situation d'urgence.
             Il vise à sauver des vies en parallèle d'autres interventions humanitaires.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {[
                "Prévenir la violence sexuelle",
                "Réduire la transmission VIH",
                "Prévenir la mortalité maternelle"
              ].map((goal, idx) => (
                <div key={idx} className="bg-teal-50 border border-teal-100 p-3 rounded-lg flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-teal-800 font-medium">{goal}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Module 2: Coordination */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-100 rounded-lg mr-3">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Coordination</h3>
          </div>
          <p className="text-sm text-gray-500 mb-4 italic">Facilité par : {MODULES[1].facilitator}</p>
          <p className="text-gray-600 mb-4">{MODULES[1].details}</p>
          <ul className="space-y-2">
            {MODULES[1].keyPoints.map((point, i) => (
              <li key={i} className="flex items-start text-sm text-gray-700">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Module 3: VBG */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-red-100 rounded-lg mr-3">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Violences Basées sur le Genre</h3>
          </div>
          <p className="text-sm text-gray-500 mb-4 italic">Facilité par : {MODULES[2].facilitator}</p>
          <p className="text-gray-600 mb-4">{MODULES[2].details}</p>
          
          <div className="bg-gray-50 p-3 rounded-md mb-4">
            <span className="text-xs font-bold text-gray-500 uppercase">Facteurs de Risque</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Conflits armés", "Pauvreté", "Manque d'intimité", "Exploitation"].map(tag => (
                <span key={tag} className="px-2 py-1 bg-white border border-gray-200 rounded text-xs text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Credits */}
      <div className="mt-8 border-t border-gray-200 pt-6 text-center">
        <p className="text-sm text-gray-500 font-medium">Rapport élaboré par l'équipe IT</p>
        <div className="flex justify-center space-x-4 mt-2 text-sm text-gray-400">
          {REPORT_META.authors.map((author, index) => (
            <span key={index}>{author}</span>
          ))}
        </div>
      </div>
    </div>
  );
};