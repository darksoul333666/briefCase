import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TypingEffect from "../components/Typyingtext";

const MobileProjects = [
    {
        projectName: 'HOPPI APP',
        projectLabel: 'Hoppi get together',
        projectDescription: `Hoppi es una aplicación de tipo estilo de vida, que tiene como propósito 
        reunir personas de todas partes del mundo por medio de planes, los cuales
        pueden ser una salida, una ida a la playa o cualquier
        plan que queramos compartir lo podemos publicar para que otros usuarios lo
        encuentren en el mapa y puedan unirse.`,
        projectTags: ['React Native', 'Notificaciones push', 'Chat'],
        projectRole: 'Desarrollador',
        projectCustomer: 'Monkey Cave'
    },
    {
        projectName: 'Desansiedad',
        projectLabel: 'Atención al alcance de tu móvil',
        projectDescription: `El propósito de desansiedad es ofrecer a los usuarios la posibilidad de 
        contactar por medio de videollamada a un especialista que pueda brindarles asistencia
        personalizada, además de que cuenta con una biblioteca de contenido muy amplia en donde
        los usuarios podrán documentarse sobre los diferentes padecimientos que puede desencadenar 
        esta afección, así como ejercicios de relajación.`,
        projectTags: ['Videollamadas', 'WebRTC', 'Chat'],
        projectRole: 'Desarrollador',
        projectCustomer: 'Dra. Fabiola Cuevas'
    }
]

const WebAppProjects = [
    {
        
    }
]

const PreviewProject = ({text}) => {
    return (
        <Box
            sx={{
                height: '50vh',
                width: '100%',
                border: 'solid',
                borderColor: 'secondary.main',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 3,
                borderWidth: 2,
                cursor: 'pointer',
                '&:hover': {
                    '& :first-child': {
                        fontSize: 'calc(72px * 1.2)',
                        color: 'white',
                        '-webkit-text-stroke': '3px white',
                    },
                },
            }}
        >
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: 72,
                    fontFamily: 'Nunito',
                    transition: 'font-size 0.3s ease-in-out',
                    '-webkit-text-stroke': '3px #bffcfc',
                    color: 'transparent',
                }}>{text}</Typography>
        </Box>
    );
};

const TagContainer = ({ item }) => (
    <Box sx={{
        borderRadius: .5,
        borderColor: 'secondary.main',
        textAlign: 'center',
        marginRight: 1,
        paddingX: .5,
        borderStyle: 'solid',
        borderWidth: .7
    }} >
        <Typography fontSize={16} fontStyle={'light'} >
            {item}
        </Typography>
    </Box>
)

const Projects = () => {
    return (
        <Box sx={{ minHeight: '100vh', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap' }}>
            <Box sx={{width: '100%'}}>
            <TypingEffect text={'Proyectos insignia'} speed={70} styles={{ marginBottom: 3 }} />
            </Box>
            {MobileProjects.map((project) => (
                <Box sx={{ display: 'flex', width: '48%', flexDirection: 'column' }} >
                    <PreviewProject text={project.projectName} />
                    <Box mt={3} sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent:'space-between'
                    }}>
                        <Box sx={{ display: 'flex', flex: 4 }} >
                            <Typography fontSize={22} fontStyle={'normal'}>
                                {project.projectLabel}
                            </Typography>
                        </Box>
                        <Box sx={{
                            flex: 3,
                            flexDirection: 'column',
                            display: 'flex',
                        }} >
                            <Box sx={{ flex: 1, mb: .5, display: 'flex', flexDirection: 'row' }} >
                                <Box sx={{ flex: 1 }}>
                                    <Typography fontSize={16} fontStyle={'light'} >
                                        Rol:
                                    </Typography>
                                </Box>
                                <Box sx={{ flex: 3 }}>
                                    <TagContainer item={project.projectRole} />
                                </Box>
                            </Box>
                            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row' }} >
                                <Box sx={{ flex: 1 }}>
                                    <Typography fontSize={16} fontStyle={'light'} >
                                        Cliente:
                                    </Typography>
                                </Box>
                                <Box sx={{ flex: 3, alignSelf: 'center', }}>
                                <TagContainer item={project.projectCustomer} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box mt={3} sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                    >
                        <Typography fontSize={18} fontStyle={'light'}>
                            {project.projectDescription}
                        </Typography>
                    </Box>
                    <Box mt={2} sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                    >
                        {project.projectTags.map((tag) => (
                            <TagContainer item={tag} />
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default Projects;
