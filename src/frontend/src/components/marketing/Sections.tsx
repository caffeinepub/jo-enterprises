import { Container, SectionHeading, PrimaryButton } from './MarketingPrimitives';
import { CheckCircle2, Target, Users, Zap } from 'lucide-react';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/generated/jo-enterprises-hero.dim_1600x900.png"
          alt="Jo Enterprises"
          className="w-full h-full object-cover opacity-20"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Welcome to{' '}
            <span className="text-primary">Jo Enterprises</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Delivering excellence through innovation, integrity, and unwavering commitment to our clients' success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <PrimaryButton onClick={scrollToContact} size="lg">
              Get in Touch
            </PrimaryButton>
            <button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="px-8 py-3 text-base font-medium text-foreground hover:text-primary border-2 border-border hover:border-primary rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
          {[
            { icon: Target, title: 'Results-Driven', desc: 'Focused on delivering measurable outcomes' },
            { icon: Users, title: 'Client-Centric', desc: 'Your success is our priority' },
            { icon: Zap, title: 'Innovative Solutions', desc: 'Cutting-edge approaches to modern challenges' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionHeading>About Jo Enterprises</SectionHeading>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              At Jo Enterprises, we believe in building lasting partnerships through exceptional service and innovative solutions. Our team brings together decades of experience and a passion for excellence that drives everything we do.
            </p>
            <p>
              Founded on principles of integrity, innovation, and client success, we've grown into a trusted partner for businesses seeking to achieve their goals and overcome challenges in today's dynamic marketplace.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                'Proven track record of success',
                'Dedicated team of experts',
                'Tailored solutions for every client',
                'Commitment to continuous improvement'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    {
      title: 'Strategic Consulting',
      description: 'Expert guidance to help you navigate complex business challenges and identify growth opportunities.',
      features: ['Market Analysis', 'Business Planning', 'Risk Assessment']
    },
    {
      title: 'Operational Excellence',
      description: 'Streamline your operations and maximize efficiency with our proven methodologies and best practices.',
      features: ['Process Optimization', 'Quality Management', 'Performance Metrics']
    },
    {
      title: 'Digital Transformation',
      description: 'Embrace the future with cutting-edge technology solutions tailored to your unique business needs.',
      features: ['Technology Integration', 'Digital Strategy', 'Innovation Consulting']
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Our Services</SectionHeading>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive solutions designed to drive your business forward and achieve sustainable growth.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
