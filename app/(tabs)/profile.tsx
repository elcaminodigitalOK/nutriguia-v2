import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { User, Settings, Bell, Shield, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';

export default function ProfileScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const profileOptions = [
    {
      icon: Settings,
      title: 'Configuración',
      subtitle: 'Personaliza tu experiencia',
      color: '#6B7280',
    },
    {
      icon: Bell,
      title: 'Notificaciones',
      subtitle: 'Gestiona tus alertas',
      color: '#F59E0B',
      hasSwitch: true,
      switchValue: notifications,
      onSwitchChange: setNotifications,
    },
    {
      icon: Shield,
      title: 'Privacidad',
      subtitle: 'Controla tu información',
      color: '#10B981',
    },
    {
      icon: HelpCircle,
      title: 'Ayuda y Soporte',
      subtitle: 'Obtén asistencia',
      color: '#3B82F6',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Perfil</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <User size={40} color="#FFFFFF" strokeWidth={2} />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Usuario</Text>
          <Text style={styles.profileEmail}>usuario@email.com</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Planes Activos</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Días Seguidos</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>89%</Text>
          <Text style={styles.statLabel}>Progreso</Text>
        </View>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {profileOptions.map((option, index) => {
          const IconComponent = option.icon;
          return (
            <TouchableOpacity key={index} style={styles.optionCard}>
              <View style={styles.optionLeft}>
                <View style={[styles.optionIcon, { backgroundColor: option.color + '20' }]}>
                  <IconComponent size={24} color={option.color} strokeWidth={2} />
                </View>
                <View style={styles.optionText}>
                  <Text style={styles.optionTitle}>{option.title}</Text>
                  <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
                </View>
              </View>
              {option.hasSwitch && (
                <Switch
                  value={option.switchValue}
                  onValueChange={option.onSwitchChange}
                  trackColor={{ false: '#D1D5DB', true: '#22C55E' }}
                  thumbColor={option.switchValue ? '#FFFFFF' : '#FFFFFF'}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton}>
        <LogOut size={20} color="#EF4444" strokeWidth={2} />
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
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
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    marginTop: 24,
    borderRadius: 16,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  editButton: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    marginTop: 16,
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#22C55E',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  optionsContainer: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  optionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  optionText: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    marginTop: 24,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FEE2E2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  logoutText: {
    fontSize: 16,
    color: '#EF4444',
    fontWeight: '600',
    marginLeft: 8,
  },
  bottomPadding: {
    height: 32,
  },
});