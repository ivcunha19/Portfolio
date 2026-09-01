import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    pt: {
        translation: {
            nav: {
                sobre: 'Sobre mim',
                projetos: 'Projetos',
                experiencias: 'Experiências',
                contato: 'Contato'
            },
            inicio: {
                greeting: 'Oi, meu nome é',
                name: 'Ivo Cunha',
                role: 'Engenheiro de Software'
            },
            sobre: {
                title: 'Sobre',
                bio: 'Sou um estudante de Engenharia de Software de Belo Horizonte, Minas Gerais. Apaixonado por tecnologia e pelo impacto que ela gera na sociedade. Busco oportunidades que me permitam contribuir com dedicação, desenvolver soluções de qualidade e, ao mesmo tempo, expandir meus conhecimentos.',
                altPhoto: 'Foto minha'
            },
            projetos: {
                title: 'Projetos',
                filterBtn: 'Filtrar Projetos',
                active: 'Ativo',
                techLabel: 'Tecnologia:',
                scrollLeft: 'Rolar para esquerda',
                scrollRight: 'Rolar para direita',
                noResults: 'Nenhum projeto encontrado com os filtros selecionados.',
                cardDetails: 'Ver detalhes',
                imageSpace: 'Espaço para Imagem',
                modalImageSpace: 'Espaço para Imagem do Projeto',
                summary: 'Resumo',
                fullDescription: 'Descrição Completa',
                close: 'Fechar',
                filterTitle: 'Filtrar por Tecnologia',
                selectTech: 'Selecione a Tecnologia:',
                projectCount_one: '{{count}} projeto encontrado',
                projectCount_other: '{{count}} projetos encontrados',
                reset: 'Resetar',
                viewResults: 'Ver Resultados ({{count}})',
                allTechs: 'Todos',
                items: {
                    1: {
                        name: 'Voe Alto',
                        descricao: 'Sistema web de recomendação de locais de viagens.',
                        descricaoEstendida: 'Sistema web de recomendação de locais de viagens. Este foi o meu primeiro sistema web completo, focado em ajudar usuários a encontrar destinos de viagem com base em suas preferências.'
                    },
                    2: {
                        name: 'Gestão AAPC',
                        descricao: 'Sistema web de gestão Interna da Associação de Advogados da Copasa.',
                        descricaoEstendida: 'Sistema web de gestão interna para a Associação de Advogados da Copasa. Fui membro da equipe que desenvolveu a aplicação durante a disciplina extensionista Trabalho Interdisciplinar: Aplicações Reais.'
                    },
                    3: {
                        name: 'Patinhas do Bem',
                        descricao: 'Sistema web de adoção de Pets.',
                        descricaoEstendida: 'Sistema web focado na facilitação do processo de adoção de animais de estimação. Projeto realizado em equipe durante a disciplina Trabalho Interdisciplinar II.'
                    }
                }
            },
            experiencias: {
                title: 'Experiências',
                items: {
                    1: {
                        titulo: 'Estudante de Engenharia de Software',
                        empresa: 'PUC Minas',
                        periodo: '2025 - Presente',
                        descricao: 'Desenvolvimento de projetos acadêmicos e práticos com foco em engenharia de software, sistemas web, arquitetura e banco de dados.'
                    },
                    2: {
                        titulo: 'Pesquisador voluntário',
                        empresa: 'PUC Minas',
                        periodo: '2025 - 2025',
                        descricao: 'Projeto: Avaliação de minijogos customizáveis como ferramenta de divulgação científica e combate à desinformação.'
                    },
                    3: {
                        titulo: 'Pesquisador Bolsista',
                        empresa: 'PUC Minas/Cnpq',
                        periodo: '2026 - Presente',
                        descricao: 'Projeto: Joganinha.\n O projeto investiga e desenvolve uma plataforma de autoria de jogos educativos voltada a professores do ensino fundamental, considerando suas limitações técnicas, de tempo e de contexto escolar.'
                    },
                    4: {
                        titulo: 'Monitor',
                        empresa: 'PUC Minas',
                        periodo: '2026 - Presente',
                        descricao: 'Monitor da disciplina Algoritmos e Estruturas de Dados II'
                    }
                }
            },
            contato: {
                title: 'Contato',
                subtitle: 'Gostou do meu trabalho ou quer trocar uma ideia? Mande uma mensagem!',
                submittedTitle: 'Mensagem Enviada!',
                submittedMsg: 'Sua mensagem foi entregue com sucesso. Responderei o mais rápido possível!',
                labelName: 'Nome',
                placeholderName: 'Seu nome completo',
                labelEmail: 'E-mail',
                placeholderEmail: 'seu.email@exemplo.com',
                labelMessage: 'Mensagem',
                placeholderMessage: 'Escreva sua mensagem aqui...',
                sending: 'Enviando...',
                sendBtn: 'Enviar Mensagem',
                defaultError: 'Erro ao enviar mensagem. Tente novamente.',
                connError: 'Erro de conexão. Verifique sua internet e tente novamente.'
            },
            footer: {
                rights: '© {{year}} Ivo Cunha.',
                developedWith: 'Desenvolvido com'
            }
        }
    },
    en: {
        translation: {
            nav: {
                sobre: 'About me',
                projetos: 'Projects',
                experiencias: 'Experience',
                contato: 'Contact'
            },
            inicio: {
                greeting: 'Hi, my name is',
                name: 'Ivo Cunha',
                role: 'Software Engineer'
            },
            sobre: {
                title: 'About',
                bio: 'I am a Software Engineering student from Belo Horizonte, Minas Gerais, Brazil. Passionate about technology and the positive impact it creates in society. I am seeking opportunities that allow me to contribute with dedication, build quality solutions, and continuously expand my knowledge.',
                altPhoto: 'My photo'
            },
            projetos: {
                title: 'Projects',
                filterBtn: 'Filter Projects',
                active: 'Active',
                techLabel: 'Technology:',
                scrollLeft: 'Scroll left',
                scrollRight: 'Scroll right',
                noResults: 'No projects found with the selected filters.',
                cardDetails: 'View details',
                imageSpace: 'Image Space',
                modalImageSpace: 'Project Image Space',
                summary: 'Summary',
                fullDescription: 'Full Description',
                close: 'Close',
                filterTitle: 'Filter by Technology',
                selectTech: 'Select Technology:',
                projectCount_one: '{{count}} project found',
                projectCount_other: '{{count}} projects found',
                reset: 'Reset',
                viewResults: 'View Results ({{count}})',
                allTechs: 'All',
                items: {
                    1: {
                        name: 'Voe Alto',
                        descricao: 'Web application for travel destination recommendations.',
                        descricaoEstendida: 'Web application for travel destination recommendations. This was my first complete web application, designed to help users discover travel destinations based on their preferences.'
                    },
                    2: {
                        name: 'Gestão AAPC',
                        descricao: 'Internal management web system for the Copasa Lawyers Association.',
                        descricaoEstendida: 'Internal management web system for the Copasa Lawyers Association. I was a member of the team that built the application during the Interdisciplinary Work: Real Applications extension course.'
                    },
                    3: {
                        name: 'Patinhas do Bem',
                        descricao: 'Pet adoption web platform.',
                        descricaoEstendida: 'Web platform designed to streamline and facilitate the pet adoption process. Developed as a team project during the Interdisciplinary Work II course.'
                    }
                }
            },
            experiencias: {
                title: 'Experience',
                items: {
                    1: {
                        titulo: 'Software Engineering Student',
                        empresa: 'PUC Minas',
                        periodo: '2025 - Present',
                        descricao: 'Development of academic and practical projects focused on software engineering, web systems, architecture, and database systems.'
                    },
                    2: {
                        titulo: 'Volunteer Researcher',
                        empresa: 'PUC Minas',
                        periodo: '2025 - 2025',
                        descricao: 'Project: Evaluation of customizable minigames as a tool for science communication and combating misinformation.'
                    },
                    3: {
                        titulo: 'Research Scholar',
                        empresa: 'PUC Minas/CNPq',
                        periodo: '2026 - Present',
                        descricao: 'Project: Joganinha.\n The project researches and develops an educational game authoring platform tailored for elementary school teachers, considering their technical, time, and classroom constraints.'
                    },
                    4: {
                        titulo: 'Teaching Assistant',
                        empresa: 'PUC Minas',
                        periodo: '2026 - Present',
                        descricao: 'Teaching Assistant for the Algorithms and Data Structures II course.'
                    }
                }
            },
            contato: {
                title: 'Contact',
                subtitle: 'Liked my work or want to get in touch? Send me a message!',
                submittedTitle: 'Message Sent!',
                submittedMsg: 'Your message was delivered successfully. I will get back to you as soon as possible!',
                labelName: 'Name',
                placeholderName: 'Your full name',
                labelEmail: 'Email',
                placeholderEmail: 'your.email@example.com',
                labelMessage: 'Message',
                placeholderMessage: 'Write your message here...',
                sending: 'Sending...',
                sendBtn: 'Send Message',
                defaultError: 'Error sending message. Please try again.',
                connError: 'Connection error. Check your internet connection and try again.'
            },
            footer: {
                rights: '© {{year}} Ivo Cunha.',
                developedWith: 'Developed with'
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'pt',
        supportedLngs: ['pt', 'en'],
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    });

export default i18n;
