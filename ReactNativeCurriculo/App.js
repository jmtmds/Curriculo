import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';

import { styles, theme } from './styles';

const Section = ({title, children}) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{title.toUpperCase()}</Text>
    {children}
  </View>
);

const JobItem = ({title, details, period, description}) => (
  <View style={styles.jobContainer}>
    <Text style={styles.jobTitle}>{title}</Text>
    {details && <Text style={styles.jobDetailsText}>{details}</Text>}
    {period && <Text style={styles.jobPeriodText}>{period}</Text>}
    {Array.isArray(description) ? (
      description.map((desc, index) => (
        <Text key={index} style={styles.bodyText}>• {desc}</Text>
      ))
    ) : (
      <Text style={styles.bodyText}>{description}</Text>
    )}
  </View>
);

const handleLinkPress = (url) => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log(`Don't know how to open URL: ${url}`);
    }
  });
};

const App = () => {

  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor: theme.background}]}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          
          <View style={styles.headerContainer}>
            <Image
              source={require('./assets/JM.jpeg')}
              style={styles.profileImage}
            />
            <Text style={[styles.nameText, {color: theme.primary}]}>
              JOÃO MARCOS TAVARES
            </Text>
            <Text style={[styles.titleText, {color: theme.text}]}>
              Desenvolvedor de Software
            </Text>
          </View>

          <View style={styles.contactContainer}>
            <Text style={[styles.contactText, {color: theme.textSecondary}]}>
              Recife, PE
            </Text>
            <TouchableOpacity onPress={() => handleLinkPress('tel:5581995212147')}>
              <Text style={[styles.linkText, {color: theme.primary}]}>
                (81) 99521-2147
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLinkPress('mailto:jm3tavares@gmail.com')}>
              <Text style={[styles.linkText, {color: theme.primary}]}>
                jm3tavares@gmail.com
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLinkPress('https://www.linkedin.com/in/jmtmds')}>
              <Text style={[styles.linkText, {color: theme.primary}]}>
                linkedin.com/in/jmtmds
              </Text>
            </TouchableOpacity>
          </View>

          <Section title="Resumo">
            <Text style={styles.bodyText}>
              Estudante de Análise e Desenvolvimento de Sistemas, atualmente participando do programa de Residência em Software do Porto Digital, com aulas e formação técnica pela Deloitte na plataforma Oracle.
            </Text>
            
            <Text style={styles.bodyText}>
              Tenho experiência prática em design, prototipação e implementação de software, adquirida em projetos em parceria com a Accenture e o Corpo de Bombeiros de Pernambuco.
            </Text>
            <Text style={styles.bodyText}>
              Busco uma oportunidade para aplicar minhas habilidades em JavaScript, React, SQL e metodologias ágeis para construir soluções tecnológicas de impacto.
            </Text>
          </Section>

          <Section title="Formação Acadêmica">
            <JobItem
              title="Análise e Desenvolvimento de Sistemas"
              details="Faculdade SENAC Pernambuco"
              period="Conclusão prevista: 2026"
              description="Formação superior focada em engenharia de software, banco de dados e desenvolvimento de aplicações web e mobile."
            />
          </Section>

          <Section title="Residência de Software">
            <JobItem
              title="Programa de Residência em Software - Parceria Porto Digital & Deloitte"
              period="Recife, PE | Setembro 2025 - Presente"
              description="Participando de programa intensivo com a Deloitte, focado em capacitação na plataforma Oracle e desenvolvimento de soluções de mercado."
            />
          </Section>

          <Section title="Experiência Profissional">
            <JobItem
              title="Energy Service LTDA"
              details="Cabo de Santo Agostinho, PE"
              period="Março 2021 - Agosto 2024"
              description={[
                "Responsável pela montagem e manutenção de rotores, seguindo rigorosos procedimentos técnicos para garantir a qualidade e segurança.",
                "Desenvolvi habilidade de diagnóstico e resolução de problemas em componentes complexos, exigindo alta atenção aos detalhes."
              ]}
            />
          </Section>

          <Section title="Projetos">
            <JobItem
              title="Interface Web para Rotação de Culturas - Parceria Accenture"
              description={[
                "Desenvolvimento do front-end de uma aplicação web educacional em parceria com a Accenture, aplicando princípios de acessibilidade e usabilidade.",
                "Responsável pela prototipação (Figma), implementação (HTML, CSS, JS) e gestão ágil do projeto com Scrum e GitHub."
              ]}
            />
            <JobItem
              title="SIGO-CBPM- Sistema de Gestão de Ocorrências para o Corpo de Bombeiros"
              description={[
                "Desenvolvimento de uma solução para digitalizar e otimizar o registro de ocorrências do Corpo de Bombeiros de Pernambuco (CBPMPE).",
                "Responsável pelo design da interface (UI/UX) e desenvolvimento front-end com JavaScript e React.js, garantindo um sistema funcional e intuitivo para os operadores."
              ]}
            />
          </Section>
          
          <Section title="Habilidades Técnicas">
            <Text style={styles.skillText}>• <Text style={styles.skillCategory}>Linguagens:</Text> JavaScript, React, HTML, CSS, Git</Text>
            <Text style={styles.skillText}>• <Text style={styles.skillCategory}>Banco de dados:</Text> SQL</Text>
            <Text style={styles.skillText}>• <Text style={styles.skillCategory}>Metodologias:</Text> Metodologias Ágeis (Scrum), Design Thinking, UI/UX Design</Text>
            <Text style={styles.skillText}>• <Text style={styles.skillCategory}>Ferramentas:</Text> Lua, VS Code, Figma, Miro, GitHub</Text>
            <Text style={styles.skillText}>• <Text style={styles.skillCategory}>Cursando:</Text> Java, Typescript, ReactNative</Text>
          </Section>

          <Section title="Soft Skills">
            <Text style={styles.skillText}>
              Ética, Empatia, Resiliência, Proatividade, Colaboração, Adaptabilidade, Inteligência emocional
            </Text>
          </Section>

          <Section title="Idiomas">
            <Text style={styles.skillText}>• Português: Nativo</Text>
            <Text style={styles.skillText}>• Inglês: Técnico</Text>
          </Section>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;