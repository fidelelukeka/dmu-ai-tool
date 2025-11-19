import React from 'react';
import { Clock, Users, BookOpen, Coffee, Activity } from 'lucide-react';
import { AGENDA_ITEMS } from '../constants';
import { AgendaItem } from '../types';

const IconMap = {
  clock: Clock,
  users: Users,
  book: BookOpen,
  coffee: Coffee,
  activity: Activity
};

export const DailyTimeline: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
        <Clock className="w-5 h-5 mr-2 text-primary" />
        Chronologie de la Journée
      </h3>
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {AGENDA_ITEMS.map((event: AgendaItem, eventIdx: number) => {
            const Icon = IconMap[event.icon];
            const isLast = eventIdx === AGENDA_ITEMS.length - 1;

            return (
              <li key={event.time}>
                <div className="relative pb-8">
                  {!isLast && (
                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                  )}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                        event.icon === 'coffee' ? 'bg-orange-100 text-orange-600' : 'bg-primary/10 text-primary'
                      }`}>
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500 font-semibold">{event.time}</p>
                        <p className="font-medium text-gray-900">{event.title}</p>
                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};