import React from 'react';
import { FileText, MessageSquareText } from 'lucide-react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="bg-primary p-2 rounded-lg">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900">ReportPro</h1>
              <p className="text-xs text-gray-500 font-medium">Uvira • SSR Urgence • J1</p>
            </div>
          </div>
          
          <nav className="flex space-x-2">
            <button
              onClick={() => onViewChange(ViewState.REPORT)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === ViewState.REPORT
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Rapport
            </button>
            <button
              onClick={() => onViewChange(ViewState.AI_ASSISTANT)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === ViewState.AI_ASSISTANT
                  ? 'bg-accent text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Assistant IA</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};