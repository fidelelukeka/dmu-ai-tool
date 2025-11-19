import React, { useState } from 'react';
import { Header } from './components/Header';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { DailyTimeline } from './components/DailyTimeline';
import { AiAssistant } from './components/AiAssistant';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.REPORT);

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Header currentView={currentView} onViewChange={setCurrentView} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {currentView === ViewState.REPORT ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <ExecutiveSummary />
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-6">
              <DailyTimeline />
              
              {/* Quick CTA for AI */}
              <div className="bg-gradient-to-br from-accent to-orange-600 rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
                 <div className="relative z-10">
                   <h3 className="font-bold text-lg mb-2">Une question précise ?</h3>
                   <p className="text-sm opacity-90 mb-4">Interrogez notre assistant IA pour retrouver un détail spécifique du rapport.</p>
                   <button 
                     onClick={() => setCurrentView(ViewState.AI_ASSISTANT)}
                     className="bg-white text-orange-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-50 transition-colors"
                   >
                     Ouvrir l'Assistant
                   </button>
                 </div>
                 {/* Decorative circle */}
                 <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white opacity-10 rounded-full"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <AiAssistant />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;