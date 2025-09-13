import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, TrendingUp, Award, Users } from 'lucide-react-native';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const quickStats = [
    { icon: Heart, label: 'Padecimientos', value: '10', color: '#EF4444' },
    { icon: Users, label: 'Usuarios', value: '50K+', color: '#3B82F6' },
    { icon: Award, label: 'Expertos', value: '25+', color: '#F59E0B' },
    { icon: TrendingUp, label: 'Éxito', value: '95%', color: '#10B981' },
  ];

  const featuredConditions = [
    {
      id: 'diabetes',
      title: 'Diabetes Tipo 2',
      description: 'Control efectivo del azúcar en sangre',
      gradient: ['#3B82F6', '#1E40AF'],
    },
    {
      id: 'weight-control',
      title: 'Control de Peso',
      description: 'Planes para sobrepeso y obesidad',
      gradient: ['#10B981', '#059669'],
    },
    {
      id: 'hypertension',
      title: 'Hipertensión',
      description: 'Reduce la presión arterial naturalmente',
      gradient: ['#EF4444', '#DC2626'],
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <LinearGradient
        colors={['#22C55E', '#16A34A']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.welcomeText}>¡Bienvenido!</Text>
          <Text style={styles.headerTitle}>Tu Guía Nutricional</Text>
          <Text style={styles.headerSubtitle}>
            Planes personalizados para tu salud
          </Text>
        </View>
      </LinearGradient>

      {/* Quick Stats */}
      <View style={styles.statsContainer}>
        {quickStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <View key={index} style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: stat.color + '20' }]}>
                <IconComponent size={24} color={stat.color} strokeWidth={2} />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          );
        })}
      </View>

      {/* Featured Conditions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Padecimientos Destacados</Text>
        {featuredConditions.map((condition, index) => (
          <TouchableOpacity
            key={condition.id}
            style={styles.conditionCard}
            onPress={() => router.push(`/condition/${condition.id}`)}
          >
            <LinearGradient
              colors={condition.gradient}
              style={styles.conditionGradient}
            >
              <Text style={styles.conditionTitle}>{condition.title}</Text>
              <Text style={styles.conditionDescription}>
                {condition.description}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>

      {/* Call to Action */}
      <TouchableOpacity
        style={styles.ctaButton}
        onPress={() => router.push('/(tabs)/conditions')}
      >
        <LinearGradient
          colors={['#F97316', '#EA580C']}
          style={styles.ctaGradient}
        >
          <Text style={styles.ctaText}>Ver Todos los Padecimientos</Text>
        </LinearGradient>
      </TouchableOpacity>

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
  },
  headerContent: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: -20,
    marginBottom: 32,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: (width - 72) / 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  conditionCard: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  conditionGradient: {
    padding: 20,
  },
  conditionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  conditionDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  ctaButton: {
    marginHorizontal: 24,
    marginBottom: 32,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  ctaGradient: {
    padding: 16,
    alignItems: 'center',
  },
  ctaText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  bottomPadding: {
    height: 24,
  },
});