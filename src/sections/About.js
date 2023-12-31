import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import TypingEffect from "../components/Typyingtext";
import Avatar from '@mui/material/Avatar';

const floatText = [{
    time: '5+',
    text: 'Años de experiencia'
}
    , {
    time: '6+',
    text: 'Aplicaciones móviles'
},
{
    time: '30+',
    text: 'Proyectos finalizados'
},
{
    time: '20+',
    text: '20 aplicaciones web'
}
]
const About = () => {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'row' }}>
            <Box flex={2}>
                <Avatar sx={{
                    width: 120, height: 120,
                    marginBottom: 4,
                    borderStyle: 'solid',
                    borderColor: 'secondary.main',
                    borderWidth: 4
                }}
                    src={require('../assets/me.jpg')} />
                <TypingEffect text={'Hola, soy Jairo.'} speed={70} />
                <Typography fontWeight={'light'} fontSize={18} width={'80%'} paragraph>
                    Tengo 4 años de experiencia en el desarrollo de soluciones tecnológicas a través de la
                    creación de aplicaciones móviles, web y multiplataforma.
                </Typography>
                <Typography fontWeight={'light'} fontSize={18} width={'80%'} paragraph>
                    Lideré el diseño, la planificación y la implementación de 6 aplicaciones móviles para las 2
                    tiendas más importantes del mercado global (Appstore & Android).

                </Typography>
                <Typography fontWeight={'light'} fontSize={18} width={'80%'} paragraph>
                    He contribuido activamente al desarrollo de más de 30 aplicaciones web utilizando
                    tecnologías de vanguardia como Angular, React y Vue.js.
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                height: '60%', marginTop: 10, flexWrap: 'wrap'
            }} flex={2}>
                {floatText.map((item) => (
                    <Box sx={{
                        width: '50%',
                        marginBottom: 5,
                        height: '25vh',
                        alignItems: 'center',
                        display: 'flex', flexDirection: 'row'
                    }}>
                        <Box style={{
                            borderStyle: 'solid',
                            borderWidth: 2,
                            borderRadius: 1,
                            height: '60%',
                            alignSelf: 'center',
                        }}>

                        </Box>
                        <Box flex={2} ml={2}>
                            <Typography
                                lineHeight={.8}
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color={'secondary.main'}
                                fontWeight={'light'}
                                fontSize={72} paragraph>
                                {item.time}
                            </Typography>
                            <Typography
                                lineHeight={.5}
                                fontWeight={'light'}
                                fontSize={24} paragraph >
                                {item.text}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default About