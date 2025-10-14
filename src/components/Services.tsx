import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Battery, 
  Cpu, 
  Droplets, 
  RefreshCw,
  Wrench,
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Troca de Tela',
    description: 'Substituição completa de display com peças originais e garantia',
    icon: <Smartphone className="w-8 h-8" />,
    features: ['Peças originais', 'Garantia de 90 dias', 'Serviço em 1 hora'],
  },
  {
    id: 2,
    title: 'Troca de Bateria',
    description: 'Baterias de alta qualidade para maior durabilidade',
    icon: <Battery className="w-8 h-8" />,
    features: ['Bateria premium', 'Teste de capacidade', 'Garantia de 6 meses'],
  },
  {
    id: 3,
    title: 'Reparo de Placa',
    description: 'Conserto especializado em placas-mãe e componentes',
    icon: <Cpu className="w-8 h-8" />,
    features: ['Técnicos especializados', 'Diagnóstico gratuito', 'Micro soldagem'],
  },
  {
    id: 4,
    title: 'Limpeza e Manutenção',
    description: 'Limpeza completa e manutenção preventiva',
    icon: <Droplets className="w-8 h-8" />,
    features: ['Limpeza interna', 'Troca de pasta térmica', 'Otimização'],
  },
  {
    id: 5,
    title: 'Atualização de Software',
    description: 'Instalação e atualização de sistema operacional',
    icon: <RefreshCw className="w-8 h-8" />,
    features: ['Backup de dados', 'Instalação de apps', 'Otimização de sistema'],
  },
  {
    id: 6,
    title: 'Outros Reparos',
    description: 'Conserto de câmera, alto-falante, microfone e mais',
    icon: <Wrench className="w-8 h-8" />,
    features: ['Diagnóstico completo', 'Orçamento sem compromisso', 'Garantia'],
  },
];

const Services = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de agendar um conserto para meu celular.'
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Serviços de{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Assistência Técnica
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Seu celular com problema? Traga para quem entende.
          </p>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Técnicos especializados, equipamentos modernos e peças de qualidade para garantir o melhor reparo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
            >
              {/* Icon */}
              <div className="mb-4 p-3 bg-primary/10 rounded-lg text-primary w-fit">
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para consertar seu celular?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato agora e agende seu atendimento. Diagnóstico gratuito!
            </p>
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="group text-base"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar Conserto via WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

