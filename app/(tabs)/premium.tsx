import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Crown, Check, Star, Sparkles } from 'lucide-react-native';

export default function PremiumScreen() {
  const premiumFeatures = [
    'Acceso completo a la Semana 4 de todos los padecimientos',
    'Planes nutricionales personalizados',
    'Consultas ilimitadas con nutriólogos',
    'Recetas exclusivas y variadas',
    'Seguimiento detallado de progreso',
    'Soporte prioritario 24/7',
    'Actualizaciones mensuales de contenido',
    'Sin anuncios publicitarios',
  ];

  const plans = [
    {
      title: 'Mensual',
      price: '$9.99',
      period: '/mes',
      savings: null,
      popular: false,
    },
    {
      title: 'Anual',
      price: '$59.99',
      period: '/año',
      savings: 'Ahorra 50%',
      popular: true,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <LinearGradient
        colors={['#F59E0B', '#D97706']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Crown size={40} color="#FFFFFF" strokeWidth={2} />
          <Text style={styles.headerTitle}>Nutri Premium</Text>
          <Text style={styles.headerSubtitle}>
            Desbloquea todo tu potencial nutricional
          </Text>
        </View>
      </LinearGradient>

      {/* Features */}
      <View style={styles.featuresContainer}>
        <Text style={styles.sectionTitle}>¿Qué incluye Premium?</Text>
        {premiumFeatures.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <View style={styles.checkContainer}>
              <Check size={18} color="#22C55E" strokeWidth={3} />
            </View>
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>

      {/* Pricing Plans */}
      <View style={styles.plansContainer}>
        <Text style={styles.sectionTitle}>Elige tu plan</Text>
        {plans.map((plan, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.planCard,
              plan.popular && styles.popularPlan
            ]}
          >
            {plan.popular && (
              <View style={styles.popularBadge}>
                <Star size={12} color="#FFFFFF" strokeWidth={2} />
                <Text style={styles.popularText}>MÁS POPULAR</Text>
              </View>
            )}
            <View style={styles.planHeader}>
              <Text style={styles.planTitle}>{plan.title}</Text>
              {plan.savings && (
                <View style={styles.savingsContainer}>
                  <Text style={styles.savingsText}>{plan.savings}</Text>
                </View>
              )}
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{plan.price}</Text>
              <Text style={styles.period}>{plan.period}</Text>
            </View>
            <TouchableOpacity style={[
              styles.selectButton,
              plan.popular && styles.popularButton
            ]}>
              <Text style={[
                styles.selectButtonText,
                plan.popular && styles.popularButtonText
              ]}>
                Seleccionar Plan
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>

      {/* Benefits Highlight */}
      <View style={styles.benefitsContainer}>
        <Sparkles size={32} color="#F59E0B" strokeWidth={2} />
        <Text style={styles.benefitsTitle}>¡Transforma tu salud hoy!</Text>
        <Text style={styles.benefitsText}>
          Únete a miles de personas que ya han mejorado su calidad de vida 
          con nuestros planes nutricionales especializados.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          • Cancela cuando quieras{'\n'}
          • Garantía de satisfacción de 7 días{'\n'}
          • Soporte técnico incluido
        </Text>
      </View>

      <View style={styles.bottomPadding} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
    textAlign: 'center',
  },
  featuresContainer: {
    marginHorizontal: 24,
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#DCFCE7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  featureText: {
    fontSize: 16,
    color: '#374151',
    flex: 1,
    lineHeight: 24,
  },
  plansContainer: {
    marginHorizontal: 24,
    marginTop: 32,
  },
  planCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  popularPlan: {
    borderColor: '#F59E0B',
    transform: [{ scale: 1.02 }],
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    alignSelf: 'center',
    backgroundColor: '#F59E0B',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  popularText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 4,
  },
  planHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  savingsContainer: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  savingsText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#16A34A',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 24,
  },
  price: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#111827',
  },
  period: {
    fontSize: 16,
    color: '#6B7280',
    marginLeft: 4,
  },
  selectButton: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  popularButton: {
    backgroundColor: '#F59E0B',
  },
  selectButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
  },
  popularButtonText: {
    color: '#FFFFFF',
  },
  benefitsContainer: {
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 40,
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  benefitsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  benefitsText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    marginHorizontal: 24,
    marginTop: 32,
    padding: 20,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomPadding: {
    height: 32,
  },
});