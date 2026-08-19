import React, { useState } from 'react';
import { BookOpen, FileText, Notebook, Lightbulb, Search, ChevronRight } from 'lucide-react';

interface Subject {
  id: string;
  name: string;
  color: string;
  icon: React.ReactNode;
  papers: number;
  notes: number;
  notebooks: number;
  solutions: number;
}

interface Resource {
  id: string;
  title: string;
  type: 'paper' | 'notes' | 'notebook' | 'solution';
  year?: number;
  subject: string;
}

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const subjects: Subject[] = [
    {
      id: 'english',
      name: 'English A',
      color: 'from-blue-500 to-blue-600',
      icon: <BookOpen className="w-6 h-6" />,
      papers: 12,
      notes: 24,
      notebooks: 8,
      solutions: 12,
    },
    {
      id: 'math',
      name: 'Mathematics',
      color: 'from-purple-500 to-purple-600',
      icon: <Lightbulb className="w-6 h-6" />,
      papers: 15,
      notes: 30,
      notebooks: 10,
      solutions: 15,
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      color: 'from-green-500 to-green-600',
      icon: <FileText className="w-6 h-6" />,
      papers: 10,
      notes: 20,
      notebooks: 7,
      solutions: 10,
    },
    {
      id: 'physics',
      name: 'Physics',
      color: 'from-red-500 to-red-600',
      icon: <Notebook className="w-6 h-6" />,
      papers: 10,
      notes: 20,
      notebooks: 7,
      solutions: 10,
    },
    {
      id: 'history',
      name: 'History',
      color: 'from-amber-500 to-amber-600',
      icon: <BookOpen className="w-6 h-6" />,
      papers: 8,
      notes: 16,
      notebooks: 6,
      solutions: 8,
    },
    {
      id: 'geography',
      name: 'Geography',
      color: 'from-teal-500 to-teal-600',
      icon: <Lightbulb className="w-6 h-6" />,
      papers: 8,
      notes: 16,
      notebooks: 6,
      solutions: 8,
    },
    {
      id: 'biology',
      name: 'Biology',
      color: 'from-emerald-500 to-emerald-600',
      icon: <FileText className="w-6 h-6" />,
      papers: 11,
      notes: 22,
      notebooks: 8,
      solutions: 11,
    },
    {
      id: 'economics',
      name: 'Economics',
      color: 'from-indigo-500 to-indigo-600',
      icon: <Notebook className="w-6 h-6" />,
      papers: 9,
      notes: 18,
      notebooks: 7,
      solutions: 9,
    },
  ];

  const sampleResources: Resource[] = [
    { id: '1', title: 'Past Paper May 2023', type: 'paper', year: 2023, subject: 'english' },
    { id: '2', title: 'Essay Writing Guide', type: 'notes', subject: 'english' },
    { id: '3', title: 'Algebra Fundamentals', type: 'notebook', subject: 'math' },
    { id: '4', title: 'Past Paper June 2024', type: 'paper', year: 2024, subject: 'math' },
    { id: '5', title: 'Organic Chemistry Summary', type: 'notes', subject: 'chemistry' },
    { id: '6', title: 'Periodic Table Notes', type: 'solution', subject: 'chemistry' },
  ];

  const filteredResources = sampleResources.filter(
    (resource) =>
      (!selectedSubject || resource.subject === selectedSubject) &&
      (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.subject.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'paper':
        return <FileText className="w-4 h-4" />;
      case 'notes':
        return <Notebook className="w-4 h-4" />;
      case 'notebook':
        return <Notebook className="w-4 h-4" />;
      case 'solution':
        return <Lightbulb className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Zon</h1>
            </div>
            <p className="text-sm text-muted-foreground">Master CXC</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">Welcome to Zon</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your complete study companion for CXC exams. Access past papers, study notes, notebooks, and solutions all in one place.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search subjects or resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Subject Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6">All Subjects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(selectedSubject === subject.id ? null : subject.id)}
                className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 transform hover:scale-105 ${
                  selectedSubject === subject.id
                    ? 'ring-2 ring-primary shadow-lg'
                    : 'hover:shadow-lg'
                } bg-white`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${subject.color} flex items-center justify-center text-white mb-4`}>
                    {subject.icon}
                  </div>
                  
                  <h4 className="text-lg font-bold text-foreground mb-4 text-left">{subject.name}</h4>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-slate-50 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">Papers</p>
                      <p className="font-bold text-foreground">{subject.papers}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">Notes</p>
                      <p className="font-bold text-foreground">{subject.notes}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">Notebooks</p>
                      <p className="font-bold text-foreground">{subject.notebooks}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">Solutions</p>
                      <p className="font-bold text-foreground">{subject.solutions}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        {selectedSubject && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">
                Resources for {subjects.find((s) => s.id === selectedSubject)?.name}
              </h3>
              <button
                onClick={() => setSelectedSubject(null)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear Filter
              </button>
            </div>

            {filteredResources.length > 0 ? (
              <div className="space-y-3">
                {filteredResources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {getResourceIcon(resource.type)}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-foreground">{resource.title}</p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {resource.type} {resource.year && `• ${resource.year}`}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">No resources found</p>
            )}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-muted-foreground">
          <p>Zon • Master CXC with confidence</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
