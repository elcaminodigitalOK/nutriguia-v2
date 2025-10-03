import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Search, ChevronRight } from 'lucide-react-native';
import { router } from 'expo-router';

export default function ConditionsScreen() {
  const [searchText, setSearchText] = useState('');

  const conditions = [
    {
      id: 'weight-control',
      title: 'Control de Peso',
      subtitle: 'Para Sobrepeso y Obesidad',
      description: 'Planes alimenticios balanceados para alcanzar tu peso ideal',
      icon: '⚖️',
      color: '#10B981',
    },
    {
      id: 'diabetes',
      title: 'Diabetes Tipo 2',
      subtitle: 'Manejo del azúcar en sangre',
      description: 'Dietas especializadas para controlar la glucosa',
      icon: '🩸',
      color: '#3B82F6',
    },
    {
      id: 'hypertension',
      title: 'Hipertensión Arterial',
      subtitle: 'Para bajar la presión arterial',
      description: 'Alimentación baja en sodio y rica en potasio',
      icon: '💓',
      color: '#EF4444',
    },
    {
      id: 'cholesterol',
      title: 'Colesterol Elevado',
      subtitle: 'Para la salud cardiovascular',
      description: 'Dietas para reducir el colesterol malo',
      icon: '❤️',
      color: '#F59E0B',
    },
    {
      id: 'ibs',
      title: 'Síndrome del Intestino Irritable',
      subtitle: 'Para la salud digestiva',
      description: 'Alimentación FODMAP y antiinflamatoria',
      icon: '🍃',
      color: '#8B5CF6',
    },
    {
      id: 'celiac',
      title: 'Enfermedad Celíaca',
      subtitle: 'Intolerancia al Gluten',
      description: 'Dietas completamente libres de gluten',
      icon: '🌾',
      color: '#F97316',
    },
    {
      id: 'anemia',
      title: 'Anemia',
      subtitle: 'Por deficiencia de hierro',
      description: 'Alimentos ricos en hierro y vitamina C',
      icon: '🩸',
      color: '#DC2626',
    },
    {
      id: 'osteoporosis',
      title: 'Osteoporosis',
      subtitle: 'Para la salud de los huesos',
      description: 'Rica en calcio, vitamina D y magnesio',
      icon: '🦴',
      color: '#059669',
    },
    {
      id: 'gout',
      title: 'Ácido Úrico Elevado',
      subtitle: 'Gota',
      description: 'Dietas bajas en purinas',
      icon: '⚡',
      color: '#7C3AED',
    },
    {
      id: 'kidney-disease',
      title: 'Enfermedad Renal Crónica',
      subtitle: 'ERC - Dietas específicas',
      description: 'Control de proteínas, fósforo y potasio',
      icon: '🫘',
      color: '#0891B2',
    },
  ];

  const filteredConditions = conditions.filter(condition =>
    condition.title.toLowerCase().includes(searchText.toLowerCase()) ||
    condition.subtitle.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Padecimientos</Text>
        <Text style={styles.headerSubtitle}>
          Selecciona tu condición para acceder a tu plan nutricional
        </Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Search size={20} color="#6B7280" strokeWidth={2} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar padecimiento..."
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#9CA3AF"
        />
      </View>

      {/* Conditions List */}
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {filteredConditions.map((condition) => (
          <TouchableOpacity
            key={condition.id}
            style={styles.conditionCard}
            onPress={() => router.push(`/condition/${condition.id}` as any)}
          >
            <View style={styles.cardContent}>
              <View style={styles.cardLeft}>
                <View style={[styles.iconContainer, { backgroundColor: condition.color + '20' }]}>
                  <Text style={styles.iconText}>{condition.icon}</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.conditionTitle}>{condition.title}</Text>
                  <Text style={styles.conditionSubtitle}>{condition.subtitle}</Text>
                  <Text style={styles.conditionDescription}>{condition.description}</Text>
                </View>
              </View>
              <ChevronRight size={24} color="#6B7280" strokeWidth={2} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#111827',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  conditionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  iconText: {
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
  },
  conditionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  conditionSubtitle: {
    fontSize: 14,
    color: '#22C55E',
    fontWeight: '600',
    marginBottom: 4,
  },
  conditionDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
});