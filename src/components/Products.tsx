import { motion } from 'framer-motion';
import { Smartphone, Shield, Headphones, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  category: 'phone' | 'case' | 'accessory';
  image?: string;
}

const products: Product[] = [
  // Phones
  { id: 1, name: 'iPhone 15 Pro Max', price: 8999, category: 'phone' },
  { id: 2, name: 'Samsung Galaxy S24 Ultra', price: 7499, category: 'phone' },
  { id: 3, name: 'Xiaomi Redmi Note 13 Pro', price: 2199, category: 'phone' },
  { id: 4, name: 'Motorola Edge 40 Neo', price: 1899, category: 'phone' },
  
  // Cases & Screen Protectors
  { id: 5, name: 'Capinha Premium Transparente', price: 49, category: 'case' },
  { id: 6, name: 'Capinha Anti-Impacto', price: 79, category: 'case' },
  { id: 7, name: 'Película de Vidro 3D', price: 39, category: 'case' },
  { id: 8, name: 'Película Hidrogel Premium', price: 59, category: 'case' },
  
  // Accessories
  { id: 9, name: 'Fone Bluetooth TWS', price: 149, category: 'accessory' },
  { id: 10, name: 'Carregador Rápido 65W', price: 89, category: 'accessory' },
  { id: 11, name: 'Cabo USB-C Premium', price: 45, category: 'accessory' },
  { id: 12, name: 'Suporte Veicular Magnético', price: 69, category: 'accessory' },
];

const Products = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'phone':
        return <Smartphone className="w-12 h-12" />;
      case 'case':
        return <Shield className="w-12 h-12" />;
      case 'accessory':
        return <Headphones className="w-12 h-12" />;
      default:
        return <Smartphone className="w-12 h-12" />;
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'phone':
        return 'Celulares';
      case 'case':
        return 'Capinhas e Películas';
      case 'accessory':
        return 'Acessórios';
      default:
        return '';
    }
  };

  const handleWhatsApp = (product: Product) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no produto: ${product.name} - ${formatPrice(product.price)}`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const categories = ['phone', 'case', 'accessory'] as const;

  return (
    <section id="produtos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nossos <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Produtos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Produtos de qualidade com os melhores preços do mercado
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => {
          const categoryProducts = products.filter(p => p.category === category);
          
          return (
            <div key={category} className="mb-16 last:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {getCategoryTitle(category)}
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
                  >
                    {/* Product Image Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-primary/40">
                        {getCategoryIcon(product.category)}
                      </div>
                      <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        Novo
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      <h4 className="font-semibold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">
                        {product.name}
                      </h4>
                      
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-primary">
                          {formatPrice(product.price)}
                        </span>
                      </div>

                      <Button
                        onClick={() => handleWhatsApp(product)}
                        className="w-full group"
                        variant="default"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Solicitar via WhatsApp
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;

