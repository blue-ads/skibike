import React, { useState } from 'react';
import { Mountain, Snowflake, Users, Award, MapPin, Mail, Phone, Globe, Menu, X, ChevronDown } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState('de');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    de: {
      nav: {
        home: 'Startseite',
        features: 'Eigenschaften',
        specs: 'Spezifikationen',
        action: 'In Aktion',
        contact: 'Kontakt'
      },
      hero: {
        title: 'Skibike',
        subtitle: 'Revolutionäre Skibikes aus den österreichischen Alpen',
        description: 'Erleben Sie den ultimativen Wintersport mit unseren innovativen Skibikes. Aus hochwertigem Stahl gefertigt für maximale Haltbarkeit und Performance.',
        cta: 'Mehr erfahren'
      },
      features: {
        title: 'Warum Skibike wählen?',
        items: [
          {
            title: 'Hochwertige Stahlkonstruktion',
            description: 'Robust und langlebig für jahrelangen Fahrspaß'
          },
          {
            title: 'Federsystem',
            description: 'Integrierte Federn für optimale Stoßdämpfung'
          },
          {
            title: 'Klappbar',
            description: 'Lässt sich zur Hälfte zusammenklappen für einfachen Transport und platzsparende Lagerung'
          },
          {
            title: 'Alpin-Performance',
            description: 'Entwickelt für die anspruchsvollen Bedingungen der österreichischen Alpen'
          }
        ]
      },
      specs: {
        title: 'Technische Spezifikationen',
        material: 'Material',
        materialValue: 'Hochwertigster Stahl',
        maxSpeed: 'Höchstgeschwindigkeit',
        maxSpeedValue: '50 km/h',
        weight: 'Gewicht',
        weightValue: '12 kg',
        shockAbsorption: 'Stoßdämpfung',
        shockAbsorptionValue: 'Federsystem',
        brakeSystem: 'Bremssystem',
        brakeSystemValue: 'Kein Bremssystem - Natürliche Geschwindigkeitskontrolle',
        foldable: 'Klappbar',
        foldableValue: 'Ja, zur Hälfte zusammenklappbar',
        price: 'Preis',
        priceValue: 'Noch nicht verfügbar'
      },
      action: {
        title: 'Skibike in Aktion',
        description: 'Sehen Sie unsere Skibikes bei spannenden Schneerennen und Wettkämpfen in den österreichischen Alpen.',
        competitions: [
          {
            title: 'Alpine Meisterschaft',
            description: 'Professionelle Fahrer zeigen die Leistungsfähigkeit unserer Skibikes bei hochintensiven Rennen'
          },
          {
            title: 'Freestyle-Wettkampf',
            description: 'Beeindruckende Tricks und Sprünge demonstrieren die Vielseitigkeit unserer Skibikes'
          },
          {
            title: 'Ausdauerrennen',
            description: 'Langstreckenrennen beweisen die Robustheit und Zuverlässigkeit unserer Stahlkonstruktion'
          }
        ]
      },
      contact: {
        title: 'Kontakt',
        location: 'Österreich, Österreichische Alpen',
        email: 'hit@becher.at',
        phone: '+43 6643410445',
        description: 'Bereit für den internationalen Markt - Kontaktieren Sie uns für weitere Informationen'
      }
    },
    en: {
      nav: {
        home: 'Home',
        features: 'Features',
        specs: 'Specifications',
        action: 'In Action',
        contact: 'Contact'
      },
      hero: {
        title: 'Skibike',
        subtitle: 'Revolutionary Skibikes from the Austrian Alps',
        description: 'Experience the ultimate winter sport with our innovative skibikes. Crafted from premium steel for maximum durability and performance.',
        cta: 'Learn More'
      },
      features: {
        title: 'Why Choose Skibike?',
        items: [
          {
            title: 'Premium Steel Construction',
            description: 'Robust and durable for years of riding enjoyment'
          },
          {
            title: 'Spring System',
            description: 'Integrated springs for optimal shock absorption'
          },
          {
            title: 'Foldable',
            description: 'Folds in half for easy transport and space-saving storage'
          },
          {
            title: 'Alpine Performance',
            description: 'Designed for the demanding conditions of the Austrian Alps'
          }
        ]
      },
      specs: {
        title: 'Technical Specifications',
        material: 'Material',
        materialValue: 'Premium Steel',
        maxSpeed: 'Max Speed',
        maxSpeedValue: '50 km/h',
        weight: 'Weight',
        weightValue: '12 kg',
        shockAbsorption: 'Shock Absorption',
        shockAbsorptionValue: 'Spring System',
        brakeSystem: 'Brake System',
        brakeSystemValue: 'No brake system - Natural speed control',
        foldable: 'Foldable',
        foldableValue: 'Yes, folds in half',
        price: 'Price',
        priceValue: 'Not yet available'
      },
      action: {
        title: 'Skibike in Action',
        description: 'See our skibikes in exciting snow racing competitions throughout the Austrian Alps.',
        competitions: [
          {
            title: 'Alpine Championship',
            description: 'Professional riders showcase the performance of our skibikes in high-intensity races'
          },
          {
            title: 'Freestyle Competition',
            description: 'Impressive tricks and jumps demonstrate the versatility of our skibikes'
          },
          {
            title: 'Endurance Race',
            description: 'Long-distance races prove the robustness and reliability of our steel construction'
          }
        ]
      },
      contact: {
        title: 'Contact',
        location: 'Austria, Austrian Alps',
        email: 'info@skibike.at',
        phone: '+43 1 234 5678',
        description: 'Ready for international markets - Contact us for more information'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-800">{t.hero.title}</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">{t.nav.home}</a>
              <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">{t.nav.features}</a>
              <a href="#specs" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">{t.nav.specs}</a>
              <a href="#action" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">{t.nav.action}</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">{t.nav.contact}</a>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 py-4 border-t border-slate-200">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">{t.nav.home}</a>
                <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">{t.nav.features}</a>
                <a href="#specs" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">{t.nav.specs}</a>
                <a href="#action" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">{t.nav.action}</a>
                <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">{t.nav.contact}</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 relative overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
        {/* Decorative mountain symbols */}
        <div className="absolute top-32 left-8 opacity-5 pointer-events-none z-0">
          <Mountain className="h-24 w-24 text-blue-600" />
        </div>
        <div className="absolute top-40 right-12 opacity-5 pointer-events-none z-0">
          <Snowflake className="h-20 w-20 text-cyan-500" />
        </div>
        <div className="absolute top-60 left-1/4 opacity-3 pointer-events-none z-0">
          <Award className="h-16 w-16 text-purple-400" />
        </div>
        <div className="absolute bottom-20 right-1/3 opacity-4 pointer-events-none z-0">
          <Users className="h-18 w-18 text-indigo-400" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 tracking-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
            <a
              href="#features"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-medium text-lg"
            >
              {t.hero.cta}
              <ChevronDown className="ml-2 h-5 w-5" />
            </a>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="/Firefly 20250716105443-min.png"
                alt="Skibike in Austrian Alps"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
        {/* Decorative elements */}
        <div className="absolute left-4 top-1/4 opacity-3 pointer-events-none z-0">
          <Award className="h-32 w-32 text-blue-600" />
        </div>
        <div className="absolute right-8 top-1/3 opacity-3 pointer-events-none z-0">
          <Users className="h-28 w-28 text-green-600" />
        </div>
        <div className="absolute top-10 left-1/3 opacity-2 pointer-events-none z-0">
          <Mountain className="h-20 w-20 text-emerald-400" />
        </div>
        <div className="absolute bottom-10 right-1/4 opacity-3 pointer-events-none z-0">
          <Snowflake className="h-24 w-24 text-teal-400" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              {language === 'de' ? 'Unser Skibike im Detail' : 'Our Skibike in Detail'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'de' 
                ? 'Entdecken Sie die durchdachte Konstruktion und das innovative Design unserer Skibikes'
                : 'Discover the thoughtful construction and innovative design of our skibikes'
              }
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/Skibike_gruen-braun_1-min.jpg"
                alt="Skibike Green Brown Model"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-800">
                {language === 'de' ? 'Robuste Stahlkonstruktion' : 'Robust Steel Construction'}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {language === 'de'
                  ? 'Unser Skibike ist aus hochwertigstem Stahl gefertigt und bietet maximale Haltbarkeit für die anspruchsvollen Bedingungen der österreichischen Alpen.'
                  : 'Our skibike is crafted from premium steel, offering maximum durability for the demanding conditions of the Austrian Alps.'
                }
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Mountain className="h-6 w-6 text-white" />
                </div>
                <span className="text-slate-700 font-medium">
                  {language === 'de' ? 'Alpin-getestet und bewährt' : 'Alpine-tested and proven'}
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 space-y-6">
              <h3 className="text-3xl font-bold text-slate-800">
                {language === 'de' ? 'Klappbares Design' : 'Foldable Design'}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {language === 'de'
                  ? 'Unser innovatives Klappsystem ermöglicht es, das Skibike zur Hälfte zusammenzuklappen für einfachen Transport und platzsparende Lagerung.'
                  : 'Our innovative folding system allows the skibike to fold in half for easy transport and space-saving storage.'
                }
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <span className="text-slate-700 font-medium">
                  {language === 'de' ? 'Perfekt für Reisen und Lagerung' : 'Perfect for travel and storage'}
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/folded ski bike black purple.png"
                alt="Folded Skibike"
                className="w-full rounded-2xl shadow-xl bg-white p-8"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/Skibike-gruen-braun-13_KLEIN-min.jpg"
                alt="Skibike Detail View"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-800">
                {language === 'de' ? 'Federsystem für Komfort' : 'Spring System for Comfort'}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {language === 'de'
                  ? 'Das integrierte Federsystem sorgt für optimale Stoßdämpfung und einen komfortablen Fahrspaß auch auf unebenen Pisten.'
                  : 'The integrated spring system provides optimal shock absorption and comfortable riding even on uneven slopes.'
                }
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Snowflake className="h-6 w-6 text-white" />
                </div>
                <span className="text-slate-700 font-medium">
                  {language === 'de' ? 'Sanfte Fahrt garantiert' : 'Smooth ride guaranteed'}
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h3 className="text-3xl font-bold text-slate-800">
                {language === 'de' ? 'Ergonomischer Sitz' : 'Ergonomic Seat'}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {language === 'de'
                  ? 'Der speziell entwickelte Sitz bietet optimalen Komfort und Kontrolle während der Fahrt, perfekt abgestimmt auf die Skibike-Erfahrung.'
                  : 'The specially designed seat offers optimal comfort and control during the ride, perfectly tuned for the skibike experience.'
                }
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <span className="text-slate-700 font-medium">
                  {language === 'de' ? 'Maximaler Fahrkomfort' : 'Maximum riding comfort'}
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/seat-min.png"
                alt="Skibike Seat Detail"
                className="w-full rounded-2xl shadow-xl bg-white p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100">
        {/* Background decorative symbols */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-1/4 opacity-2">
            <Mountain className="h-40 w-40 text-blue-200" />
          </div>
          <div className="absolute bottom-20 right-1/4 opacity-2">
            <Snowflake className="h-36 w-36 text-cyan-200" />
          </div>
          <div className="absolute top-1/2 left-8 opacity-2">
            <Award className="h-24 w-24 text-green-200" />
          </div>
          <div className="absolute top-1/3 right-12 opacity-2">
            <Users className="h-28 w-28 text-purple-200" />
          </div>
          <div className="absolute top-40 right-1/3 opacity-2">
            <Mountain className="h-30 w-30 text-orange-200" />
          </div>
          <div className="absolute bottom-40 left-1/3 opacity-2">
            <Snowflake className="h-26 w-26 text-amber-200" />
          </div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              {t.features.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.items.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  {index === 0 && <Mountain className="h-8 w-8 text-white" />}
                  {index === 1 && <Snowflake className="h-8 w-8 text-white" />}
                  {index === 2 && <Users className="h-8 w-8 text-white" />}
                  {index === 3 && <Award className="h-8 w-8 text-white" />}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specs" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100">
        {/* Floating decorative elements */}
        <div className="absolute top-32 left-16 opacity-4 pointer-events-none z-0">
          <Mountain className="h-16 w-16 text-slate-400" />
        </div>
        <div className="absolute bottom-32 right-16 opacity-4 pointer-events-none z-0">
          <Snowflake className="h-14 w-14 text-blue-400" />
        </div>
        <div className="absolute top-20 right-1/4 opacity-3 pointer-events-none z-0">
          <Award className="h-18 w-18 text-rose-300" />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-3 pointer-events-none z-0">
          <Users className="h-20 w-20 text-pink-300" />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              {t.specs.title}
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="font-semibold text-slate-700">{t.specs.material}:</span>
                  <span className="text-slate-600">{t.specs.materialValue}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="font-semibold text-slate-700">{t.specs.maxSpeed}:</span>
                  <span className="text-slate-600">{t.specs.maxSpeedValue}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="font-semibold text-slate-700">{t.specs.weight}:</span>
                  <span className="text-slate-600">{t.specs.weightValue}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="font-semibold text-slate-700">{t.specs.shockAbsorption}:</span>
                  <span className="text-slate-600">{t.specs.shockAbsorptionValue}</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="font-semibold text-slate-700">{t.specs.brakeSystem}:</span>
                  <span className="text-slate-600 text-sm">{t.specs.brakeSystemValue}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="font-semibold text-slate-700">{t.specs.foldable}:</span>
                  <span className="text-slate-600">{t.specs.foldableValue}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="font-semibold text-slate-700">{t.specs.price}:</span>
                  <span className="text-slate-600">{t.specs.priceValue}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See It In Action */}
      <section id="action" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-100">
        {/* Action section decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-16 left-12 opacity-2">
            <Award className="h-20 w-20 text-orange-300" />
          </div>
          <div className="absolute top-24 right-20 opacity-2">
            <Mountain className="h-24 w-24 text-blue-300" />
          </div>
          <div className="absolute bottom-32 left-1/3 opacity-2">
            <Snowflake className="h-18 w-18 text-cyan-300" />
          </div>
          <div className="absolute bottom-20 right-1/4 opacity-2">
            <Users className="h-22 w-22 text-green-300" />
          </div>
          <div className="absolute top-1/2 left-20 opacity-2">
            <Mountain className="h-26 w-26 text-violet-300" />
          </div>
          <div className="absolute top-1/3 right-1/3 opacity-2">
            <Snowflake className="h-22 w-22 text-indigo-300" />
          </div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              {t.action.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.action.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.action.competitions.map((competition, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-cyan-500 relative overflow-hidden">
                  <img
                    src={index === 0 ? "/52316c03-75f9-4b45-b725-800585a6e09f.png" : 
                         index === 1 ? "/408f5301-5eae-42ce-a511-01588e8d3433.png" :
                         "/caad12a9-c338-4672-9b5c-d9b1c87fd581.png"}
                    alt={competition.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{competition.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{competition.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900">
        {/* Contact section subtle decorations */}
        <div className="absolute top-20 left-20 opacity-5 pointer-events-none z-0">
          <MapPin className="h-16 w-16 text-white" />
        </div>
        <div className="absolute bottom-20 right-20 opacity-5 pointer-events-none z-0">
          <Globe className="h-14 w-14 text-white" />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-3 pointer-events-none z-0">
          <Mountain className="h-20 w-20 text-blue-300" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-3 pointer-events-none z-0">
          <Snowflake className="h-18 w-18 text-indigo-300" />
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {t.contact.title}
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-slate-300">{t.contact.location}</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-slate-300">{t.contact.email}</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-slate-300">{t.contact.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 relative overflow-hidden">
        <div className="absolute top-4 left-10 opacity-5 pointer-events-none z-0">
          <Mountain className="h-12 w-12 text-blue-400" />
        </div>
        <div className="absolute bottom-4 right-10 opacity-5 pointer-events-none z-0">
          <Snowflake className="h-10 w-10 text-cyan-400" />
        </div>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Mountain className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Skibike</span>
            </div>
            <p className="text-slate-400 text-center md:text-right">
              © 2025 Skibike. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;