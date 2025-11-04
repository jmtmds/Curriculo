import { StyleSheet } from 'react-native';

export const theme = {
  background: '#0d0d0d',
  primary: '#f9c80e',
  text: '#e0e0e0',
  textSecondary: '#adb5bd',
};

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    paddingVertical: 24,
  },
  container: {
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: theme.primary,
    marginBottom: 15,
  },
  nameText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 18,
    fontStyle: 'italic',
    marginTop: 4,
  },
  contactContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  contactText: {
    fontSize: 14,
    marginBottom: 4,
  },
  linkText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.primary,
    borderBottomWidth: 2,
    borderBottomColor: theme.primary,
    paddingBottom: 6,
    marginBottom: 12,
  },
  bodyText: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 10,
    color: theme.text,
  },
  jobContainer: {
    marginBottom: 16,
  },
  jobTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  jobDetailsText: {
    fontSize: 15,
    color: theme.text,
  },
  jobPeriodText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: theme.textSecondary,
    marginBottom: 8,
  },
  skillText: {
    fontSize: 15,
    lineHeight: 22,
    color: theme.text,
  },
  skillCategory: {
    fontWeight: 'bold',
    color: theme.primary,
  },
});