import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Maria Silva',
    rating: 5,
    comment: 'Excelente atendimento! Trocaram a tela do meu iPhone em menos de 1 hora. Ficou perfeito e o preço foi justo. Super recomendo!',
    date: '15/03/2024',
  },
  {
    id: 2,
    name: 'João Santos',
    rating: 5,
    comment: 'Melhor loja de celulares da região. Comprei um Galaxy S24 com ótimo desconto e ainda ganhei uma capinha. Atendimento nota 10!',
    date: '10/03/2024',
  },
  {
    id: 3,
    name: 'Ana Paula',
    rating: 5,
    comment: 'Meu celular caiu na água e achei que tinha perdido. Levei na TechCell e conseguiram recuperar! Equipe muito competente.',
    date: '05/03/2024',
  },
  {
    id: 4,
    name: 'Carlos Eduardo',
    rating: 5,
    comment: 'Sempre compro meus acessórios aqui. Produtos de qualidade, preço bom e entrega rápida. Já sou cliente há mais de 2 anos.',
    date: '28/02/2024',
  },
  {
    id: 5,
    name: 'Fernanda Costa',
    rating: 5,
    comment: 'Atendimento impecável! Explicaram tudo sobre o conserto, deram garantia e o celular ficou como novo. Muito satisfeita!',
    date: '20/02/2024',
  },
  {
    id: 6,
    name: 'Roberto Alves',
    rating: 5,
    comment: 'Precisava trocar a bateria urgente e eles fizeram na hora. Preço justo e qualidade excelente. Voltarei sempre!',
    date: '12/02/2024',
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-300 text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="avaliacoes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O que nossos{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nós
          </p>
        </motion.div>

        {/* Desktop View - 3 columns */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
          {reviews.slice(currentIndex * 3, currentIndex * 3 + 3).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-lg border border-border relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="flex gap-1">{renderStars(review.rating)}</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                "{review.comment}"
              </p>

              <p className="text-xs text-muted-foreground">{review.date}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet View - 1-2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6 mb-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-lg border border-border relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="flex gap-1">{renderStars(review.rating)}</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                "{review.comment}"
              </p>

              <p className="text-xs text-muted-foreground">{review.date}</p>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots - Desktop only */}
        <div className="hidden lg:flex justify-center gap-2">
          {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-lg border border-border">
            <div className="flex gap-1">
              {renderStars(5)}
            </div>
            <span className="font-bold text-lg">4.9</span>
            <span className="text-muted-foreground">• 500+ avaliações</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;

