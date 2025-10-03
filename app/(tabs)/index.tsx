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
      gradient: ['#6EE7B7', '#34D399'],
      icon: '⚖️',
    },
    {
      id: 'diabetes',
      title: 'Diabetes Tipo 2',
      description: 'Control efectivo del azúcar en sangre',
      gradient: ['#60A5FA', '#3B82F6'],
      icon: '🩸',
    },
    {
      id: 'hypertension',
      title: 'Hipertensión Arterial',
      description: 'Reduce la presión arterial naturalmente',
      gradient: ['#FCA5A5', '#EF4444'],
      icon: '💓',
    },
    {
      id: 'colesterol',
      title: 'Colesterol Elevado',
      description: 'Mejora tus niveles de colesterol',
      gradient: ['#FDBA74', '#F97316'],
      icon: '❤️',
    },
    {
      id: 'irritable-bowel',
      title: 'Síndrome de Intestino Irritable',
      description: 'Manejo de síntomas y dieta FODMAP',
      gradient: ['#A78BFA', '#8B5CF6'],
      icon: '🍃',
    },
    {
      id: 'celiac',
      title: 'Celiaquía',
      description: 'Vive bien con una dieta sin gluten',
      gradient: ['#F472B6', '#EC4899'],
      icon: '🌾',
    },
    {
      id: 'anemia',
      title: 'Anemia',
      description: 'Aumenta tus niveles de hierro y energía',
      gradient: ['#9CA3AF', '#6B7280'],
      icon: '🩸',
    },
    {
      id: 'osteoporosis',
      title: 'Osteoporosis',
      description: 'Fortalece tus huesos con calcio y vitamina D',
      gradient: ['#A5B4FC', '#818CF8'],
      icon: '🦴',
    },
    {
      id: 'uric-acid',
      title: 'Ácido Úrico Elevado',
      description: 'Control de la gota y dieta baja en purinas',
      gradient: ['#FDE68A', '#FCD34D'],
      icon: '⚡',
    },
    {
      id: 'renal-disease',
      title: 'Enfermedad Renal Crónica',
      description: 'Cuida tus riñones con la dieta adecuada',
      gradient: ['#5EEAD4', '#2DD4BF'],
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
          <Text style={styles.headerTopText}>Comienza a Mejorar</Text>
          <Text style={styles.headerAppName}>NutriGuia</Text>
          <Text style={styles.headerAppSubtitle}>Un camino hacia una vida mas sana</Text>
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
                <IconComponent size={28} color={'#FFFFFF'} strokeWidth={2} />
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
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 0, // Increased padding to give space for stats
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBackgroundImage: {
    resizeMode: 'cover',
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
  headerTopText: {
    color: '#00FF00',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
    marginBottom: 4,
  },
  headerAppName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00FF00',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
    marginTop: 4,
    marginBottom: 8,
  },
  headerAppSubtitle: {
    fontSize: 16,
    color: '#00FF00',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 24, // Adjusted padding
    marginBottom: 0,
  },
  statCard: {
    alignItems: 'center',
    flex: 1, // Allow cards to grow and share space
  },
  statIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#FFE81F',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionBackgroundImage: {
    resizeMode: 'cover',
    borderRadius: 16, // Apply border radius to the image itself
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFE81F',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
    marginBottom: 16,
    textAlign: 'center',
  },
  conditionCard: {
    marginBottom: 12,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  conditionGradient: {
    padding: 16,
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
    height: 5,
    backgroundColor: '#FFE81F',
    width: '100%',
  },
});