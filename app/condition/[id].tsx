import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { ArrowLeft, Lock, Clock, CircleCheck as CheckCircle, Crown } from 'lucide-react-native';

export default function ConditionDetailScreen() {
  const { id } = useLocalSearchParams();
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [isPremium, setIsPremium] = useState(false);

  const conditionData: { [key: string]: any } = {
    'weight-control': {
      title: 'Control de Peso',
      subtitle: 'Para Sobrepeso y Obesidad',
      description: 'Plan integral para alcanzar y mantener un peso saludable',
      color: '#10B981',
      weeks: {
        1: {
          title: 'Semana 1: Fundamentos',
          description: 'Establecemos las bases de tu nueva alimentación',
          meals: [
            { name: 'Desayuno', food: 'Avena con frutas y nueces', calories: '320 kcal' },
            { name: 'Almuerzo', food: 'Ensalada con pollo a la plancha', calories: '450 kcal' },
            { name: 'Cena', food: 'Pescado al vapor con vegetales', calories: '380 kcal' },
          ],
          tips: [
            'Bebe al menos 8 vasos de agua al día',
            'Camina 30 minutos diarios',
            'Evita alimentos procesados',
          ]
        },
        2: {
          title: 'Semana 2: Intensificación',
          description: 'Aumentamos la variedad y optimizamos las porciones',
          meals: [
            { name: 'Desayuno', food: 'Smoothie verde con proteína', calories: '280 kcal' },
            { name: 'Almuerzo', food: 'Quinoa con verduras asadas', calories: '420 kcal' },
            { name: 'Cena', food: 'Salmón con brócoli al vapor', calories: '400 kcal' },
          ],
          tips: [
            'Incorpora ejercicios de fuerza',
            'Controla las porciones con tu mano',
            'Planifica tus comidas semanalmente',
          ]
        },
        3: {
          title: 'Semana 3: Consolidación',
          description: 'Reforzamos los hábitos y ajustamos según tu progreso',
          meals: [
            { name: 'Desayuno', food: 'Tostada integral con aguacate', calories: '350 kcal' },
            { name: 'Almuerzo', food: 'Bowl de proteínas variadas', calories: '480 kcal' },
            { name: 'Cena', food: 'Pollo al curry con arroz integral', calories: '420 kcal' },
          ],
          tips: [
            'Monitorea tu progreso semanalmente',
            'Ajusta las porciones según tu saciedad',
            'Mantén un diario alimentario',
          ]
        },
        4: {
          title: 'Semana 4: Perfeccionamiento Premium',
          description: 'Plan avanzado con recetas exclusivas y seguimiento personalizado',
          premium: true,
          meals: [
            { name: 'Desayuno', food: 'Bowl de acai con superfoods', calories: '310 kcal' },
            { name: 'Almuerzo', food: 'Ceviche de camarones con quinoa', calories: '390 kcal' },
            { name: 'Cena', food: 'Filete de res con vegetales gourmet', calories: '450 kcal' },
          ],
          tips: [
            'Consulta personalizada con nutriólogo',
            'Recetas gourmet saludables',
            'Plan de mantenimiento a largo plazo',
          ]
        }
      }
    },
    'diabetes': {
      title: 'Diabetes Tipo 2',
      subtitle: 'Manejo del azúcar en sangre',
      description: 'Control glucémico a través de una alimentación balanceada',
      color: '#3B82F6',
      weeks: {
        1: {
          title: 'Semana 1: Control Básico',
          description: 'Aprendemos a controlar los picos de glucosa',
          meals: [
            { name: 'Desayuno', food: 'Huevos revueltos con espinacas', calories: '250 kcal' },
            { name: 'Almuerzo', food: 'Pollo con ensalada mixta', calories: '400 kcal' },
            { name: 'Cena', food: 'Pescado con verduras al vapor', calories: '350 kcal' },
          ],
          tips: [
            'Controla tu glucosa antes y después de las comidas',
            'Evita azúcares simples',
            'Come cada 3-4 horas en pequeñas porciones',
          ]
        },
        2: {
          title: 'Semana 2: Estabilización',
          description: 'Mantenemos niveles estables de glucosa',
          meals: [
            { name: 'Desayuno', food: 'Yogurt griego con nueces', calories: '280 kcal' },
            { name: 'Almuerzo', food: 'Lentejas con vegetales', calories: '380 kcal' },
            { name: 'Cena', food: 'Pavo al horno con calabacín', calories: '320 kcal' },
          ],
          tips: [
            'Incorpora fibra en cada comida',
            'Realiza actividad física post-comida',
            'Mantén horarios regulares de alimentación',
          ]
        },
        3: {
          title: 'Semana 3: Optimización',
          description: 'Optimizamos el control glucémico con variedad',
          meals: [
            { name: 'Desayuno', food: 'Avena con canela y almendras', calories: '300 kcal' },
            { name: 'Almuerzo', food: 'Salmón con quinoa', calories: '420 kcal' },
            { name: 'Cena', food: 'Tofu salteado con brócoli', calories: '290 kcal' },
          ],
          tips: [
            'Experimenta con especias naturales',
            'Incluye grasas saludables',
            'Monitorea tu HbA1c mensualmente',
          ]
        },
        4: {
          title: 'Semana 4: Control Avanzado Premium',
          description: 'Estrategias avanzadas para el control óptimo de la diabetes',
          premium: true,
          meals: [
            { name: 'Desayuno', food: 'Smoothie antioxidante sin azúcar', calories: '270 kcal' },
            { name: 'Almuerzo', food: 'Bowl mediterráneo completo', calories: '410 kcal' },
            { name: 'Cena', food: 'Bacalao con ratatouille', calories: '340 kcal' },
          ],
          tips: [
            'Monitoreo continuo de glucosa',
            'Recetas con índice glucémico optimizado',
            'Plan personalizado según tu perfil glucémico',
          ]
        }
      }
    },
  };

  const currentCondition = conditionData[id as string] || conditionData['weight-control'];
  const currentWeek = currentCondition.weeks[selectedWeek];
  const isWeek4Locked = selectedWeek === 4 && !isPremium;

  const handleWeekSelect = (week: number) => {
    if (week === 4 && !isPremium) {
      Alert.alert(
        'Contenido Premium',
        'La semana 4 está disponible solo para usuarios Premium. ¿Te gustaría actualizar?',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Ver Premium', onPress: () => router.push('/(tabs)/premium') },
        ]
      );
      return;
    }
    setSelectedWeek(week);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: currentCondition.color }]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#FFFFFF" strokeWidth={2} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>{currentCondition.title}</Text>
          <Text style={styles.headerSubtitle}>{currentCondition.subtitle}</Text>
        </View>
      </View>

      {/* Week Selector */}
      <View style={styles.weekSelector}>
        {[1, 2, 3, 4].map((week) => (
          <TouchableOpacity
            key={week}
            style={[
              styles.weekButton,
              selectedWeek === week && styles.activeWeekButton,
              week === 4 && !isPremium && styles.lockedWeekButton,
            ]}
            onPress={() => handleWeekSelect(week)}
          >
            {week === 4 && !isPremium ? (
              <Lock size={16} color="#9CA3AF" strokeWidth={2} />
            ) : (
              <Text style={[
                styles.weekButtonText,
                selectedWeek === week && styles.activeWeekButtonText,
              ]}>
                {week}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {isWeek4Locked ? (
          <View style={styles.premiumContainer}>
            <Crown size={48} color="#F59E0B" strokeWidth={2} />
            <Text style={styles.premiumTitle}>Contenido Premium</Text>
            <Text style={styles.premiumDescription}>
              Desbloquea la semana 4 con contenido avanzado, recetas exclusivas y seguimiento personalizado.
            </Text>
            <TouchableOpacity
              style={styles.premiumButton}
              onPress={() => router.push('/(tabs)/premium')}
            >
              <Text style={styles.premiumButtonText}>Actualizar a Premium</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {/* Week Info */}
            <View style={styles.weekInfo}>
              <View style={styles.weekHeader}>
                <Text style={styles.weekTitle}>{currentWeek.title}</Text>
                {selectedWeek === 4 && (
                  <View style={styles.premiumBadge}>
                    <Crown size={16} color="#F59E0B" strokeWidth={2} />
                    <Text style={styles.premiumBadgeText}>Premium</Text>
                  </View>
                )}
              </View>
              <Text style={styles.weekDescription}>{currentWeek.description}</Text>
            </View>

            {/* Meals */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Plan Alimentario</Text>
              {currentWeek.meals.map((meal: any, index: number) => (
                <View key={index} style={styles.mealCard}>
                  <View style={styles.mealHeader}>
                    <Text style={styles.mealName}>{meal.name}</Text>
                    <Text style={styles.mealCalories}>{meal.calories}</Text>
                  </View>
                  <Text style={styles.mealFood}>{meal.food}</Text>
                </View>
              ))}
            </View>

            {/* Tips */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Consejos de la Semana</Text>
              {currentWeek.tips.map((tip: string, index: number) => (
                <View key={index} style={styles.tipItem}>
                  <CheckCircle size={20} color="#22C55E" strokeWidth={2} />
                  <Text style={styles.tipText}>{tip}</Text>
                </View>
              ))}
            </View>
          </>
        )}
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
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
    textAlign: 'center',
  },
  weekSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  weekButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  activeWeekButton: {
    backgroundColor: '#22C55E',
  },
  lockedWeekButton: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  weekButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6B7280',
  },
  activeWeekButtonText: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  premiumContainer: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginTop: 24,
  },
  premiumTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 16,
    marginBottom: 12,
  },
  premiumDescription: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  premiumButton: {
    backgroundColor: '#F59E0B',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
  },
  premiumButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  weekInfo: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  weekHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  weekTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
  },
  premiumBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  premiumBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D97706',
    marginLeft: 4,
  },
  weekDescription: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  mealCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  mealHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  mealName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  mealCalories: {
    fontSize: 14,
    color: '#22C55E',
    fontWeight: '600',
  },
  mealFood: {
    fontSize: 14,
    color: '#6B7280',
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
  },
  tipText: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 12,
    flex: 1,
    lineHeight: 20,
  },
});