import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, ImageBackground, Platform, Linking, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, TrendingUp, Award, Users, Clock, ListChecks, Dumbbell, HandHeart } from 'lucide-react-native';
import { router } from 'expo-router';
import Logo from '../../assets/logo1.png';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const actionButtons = [
    { icon: Clock, label: 'Temporizador', onPress: () => console.log('Timer pressed') },
    { icon: ListChecks, label: 'Rutina', onPress: () => console.log('Routine pressed') },
    { icon: Dumbbell, label: 'Ejercitación', onPress: () => console.log('Exercise pressed') },
    { icon: HandHeart, label: 'Gracias', onPress: () => console.log('Thanks pressed') },
  ];

  const allConditions = [
    {
      id: 'weight-control',
      title: 'Control de Peso',
      description: 'Planes para sobrepeso y obesidad',
      gradient: ['#34D399', '#059669'],
      icon: '⚖️',
    },
    {
      id: 'diabetes',
      title: 'Diabetes Tipo 2',
      description: 'Control efectivo del azúcar en sangre',
      gradient: ['#3B82F6', '#1D4ED8'],
      icon: '🩸',
    },
    {
      id: 'hypertension',
      title: 'Hipertensión Arterial',
      description: 'Reduce la presión arterial naturalmente',
      gradient: ['#EF4444', '#B91C1C'],
      icon: '💓',
    },
    {
      id: 'colesterol',
      title: 'Colesterol Elevado',
      description: 'Mejora tus niveles de colesterol',
      gradient: ['#F97316', '#C2410C'],
      icon: '❤️',
    },
    {
      id: 'irritable-bowel',
      title: 'Síndrome de Intestino Irritable',
      description: 'Manejo de síntomas y dieta FODMAP',
      gradient: ['#8B5CF6', '#6D28D9'],
      icon: '🍃',
    },
    {
      id: 'celiac',
      title: 'Celiaquía',
      description: 'Vive bien con una dieta sin gluten',
      gradient: ['#EC4899', '#BE185D'],
      icon: '🌾',
    },
    {
      id: 'anemia',
      title: 'Anemia',
      description: 'Aumenta tus niveles de hierro y energía',
      gradient: ['#6B7280', '#374151'],
      icon: '🩸',
    },
    {
      id: 'osteoporosis',
      title: 'Osteoporosis',
      description: 'Fortalece tus huesos con calcio y vitamina D',
      gradient: ['#818CF8', '#4F46E5'],
      icon: '🦴',
    },
    {
      id: 'uric-acid',
      title: 'Ácido Úrico Elevado',
      description: 'Control de la gota y dieta baja en purinas',
      gradient: ['#FCD34D', '#F59E0B'],
      icon: '⚡',
    },
    {
      id: 'renal-disease',
      title: 'Enfermedad Renal Crónica',
      description: 'Cuida tus riñones con la dieta adecuada',
      gradient: ['#14B8A6', '#0D9488'],
      icon: '🫘',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
      {/* Header */}
      <ImageBackground
        source={require('../../assets/images/header-background.jpg')}
        style={styles.header}
        imageStyle={styles.headerBackgroundImage}
      >
        <View style={styles.headerOverlay} />
        <View style={styles.headerContent}>
          <View style={styles.logoContainer}>
            <Image source={Logo} style={[styles.logo, { width: 120, height: 120 }]} />
          </View>
          <Text style={styles.headerAppName}>NutriGuia</Text>
          <Text style={styles.headerAppSubtitle}>Comienza un camino hacia una vida mas sana</Text>
        </View>
      </ImageBackground>

      <View style={styles.separatorLine} />

      {/* Action Buttons */}
      <View style={styles.statsContainer}>
        {actionButtons.map((stat, index) => {
          const IconComponent = stat.icon;
          // Re-using some of the vibrant colors from the conditions list
          const buttonColors = ['#10B981', '#3B82F6', '#EF4444', '#F59E0B'];
          return (
            <TouchableOpacity key={index} style={styles.statCard} onPress={stat.onPress}>
              <View style={[styles.statIcon, { backgroundColor: buttonColors[index] }]}>
                <IconComponent size={32} color={'#FFFFFF'} strokeWidth={2.5} />
              </View>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* All Conditions Section */}
      <ImageBackground
        source={require('../../assets/images/fondomenu1.jpg')}
        style={styles.section}
        imageStyle={styles.sectionBackgroundImage}
      >
        <View>
          <Text style={styles.sectionTitle}>MIS GUIAS</Text>
          {allConditions.map((condition) => (
            <TouchableOpacity
              key={condition.id}
              style={styles.conditionCard}
              onPress={() => router.push(`/condition/${condition.id}`)}
            >
              <LinearGradient
                colors={condition.gradient}
                style={styles.conditionGradient}
              >
                <View style={styles.conditionContent}>
                  <View style={styles.conditionIconContainer}>
                    <Text style={styles.conditionIconText}>{condition.icon}</Text>
                  </View>
                  <View>
                    <Text style={styles.conditionTitle}>{condition.title}</Text>
                    <Text style={styles.conditionDescription}>
                      {condition.description}
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>

      <View style={styles.bottomPadding} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    paddingBottom: 20,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBackgroundImage: {
    resizeMode: 'cover',
    transform: [{ translateY: -50 }],
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  headerContent: {
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerAppName: {
    fontSize: 32,
    fontWeight: '800',
    color: '#00FF00',
    textShadowColor: '#000000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
    letterSpacing: 1,
    marginTop: 4,
    marginBottom: 8,
  },
  headerAppSubtitle: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#00FF00',
    textShadowColor: '#000000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
    textAlign: 'center',
    marginBottom: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
    marginBottom: 0,
    marginTop: -28,
  },
  statCard: {
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  statLabel: {
    fontSize: 13,
    color: '#FFE81F',
    textShadowColor: '#000000',
    textShadowOffset: {width: 1.5, height: 1.5},
    textShadowRadius: 3,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
    marginTop: -7,
  },
  sectionBackgroundImage: {
    resizeMode: 'cover',
    borderRadius: 16,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: '#FFE81F',
    textShadowColor: '#000000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
    marginBottom: 16,
    marginTop: 16,
    textAlign: 'center',
    letterSpacing: 2,
  },
  conditionCard: {
    marginBottom: 12,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  conditionGradient: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  conditionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  conditionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  conditionIconText: {
    fontSize: 20,
  },
  conditionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  conditionDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  bottomPadding: {
    height: 24,
  },
  separatorLine: {
    height: 7,
    backgroundColor: '#FFE81F',
    width: '100%',
    shadowColor: '#FFE81F',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
  },
});