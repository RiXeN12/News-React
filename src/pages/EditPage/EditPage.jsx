import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import PhotoIcon from '@mui/icons-material/Photo';


export default function EditPage() {
    const [alignment, setAlignment] = React.useState('left');
    const [formats, setFormats] = React.useState(() => ['italic']);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    
  return (
    <Card sx={"100%"}>
        <Box sx={{ flexGrow: 1 }}>
            <div style={{
                display:"flex",
                justifyContent:"space-between"
            }}>
                <div>
                    <div style={{
                    width:"95rem",
                }}>
                                <CardContent >
                                <Typography  align="center" marginBottom={"1%"} marginTop={'1%'} gutterBottom variant="h4"  component="div">
                                Редагування новини
                                </Typography>
                                <Typography  gutterBottom variant="h6" component="div">
                                Основна інформація:
                                </Typography>
                                <Typography  gutterBottom variant="h6" component="div">
                                Назва *
                                </Typography>
                                <Box
                                    marginBottom={'1%'}
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m:0, width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                    <TextField  id="outlined-basic"   variant="outlined" />
                                </Box>
                                    <hr color="#b81414"/>
                                <Typography  gutterBottom variant="h6" component="div">
                                    Текст новини *
                                </Typography>
                                <div style={{
                                    display:"flex",
                                    justifyContent:"center",
                                    padding:"10px",
                                    border:'1px solid',
                                }}>
                                    <Select
                                    value={"age"}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                    <MenuItem value={10}>10px</MenuItem>
                                    <MenuItem value={20}>14px</MenuItem>
                                    <MenuItem value={30}>20px</MenuItem>
                                    <MenuItem value={20}>24px</MenuItem>
                                    </Select>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            }}
                                        >
                                            <ToggleButtonGroup
                                            size="small"
                                            value={alignment}
                                            exclusive
                                            onChange={handleAlignment}
                                            aria-label="text alignment"
                                            >
                                            <ToggleButton value="left" aria-label="left aligned">
                                                <FormatAlignLeftIcon />
                                            </ToggleButton>
                                            <ToggleButton value="center" aria-label="centered">
                                                <FormatAlignCenterIcon />
                                            </ToggleButton>
                                            <ToggleButton value="right" aria-label="right aligned">
                                                <FormatAlignRightIcon />
                                            </ToggleButton>
                                            <ToggleButton value="justify" aria-label="justified" disabled>
                                                <FormatAlignJustifyIcon />
                                            </ToggleButton>
                                            </ToggleButtonGroup>
                                            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
                                            <ToggleButtonGroup
                                            size="small"
                                            value={formats}
                                            onChange={handleFormat}
                                            aria-label="text formatting"
                                            >
                                            <ToggleButton value="bold" aria-label="bold">
                                                <FormatBoldIcon />
                                            </ToggleButton>
                                            <ToggleButton value="italic" aria-label="italic">
                                                <FormatItalicIcon />
                                            </ToggleButton>
                                            <ToggleButton value="underlined" aria-label="underlined">
                                                <FormatUnderlinedIcon />
                                            </ToggleButton>
                                            <ToggleButton value="color" aria-label="color" disabled>
                                                <FormatColorFillIcon />
                                                <ArrowDropDownIcon />
                                            </ToggleButton>
                                            </ToggleButtonGroup>
                                        </Paper>
                                    </div>
                                <Box marginBottom={'1%'}  sx={{ p: 0, border: '1px solid grey' }}>
                                    
                                    <TextareaAutosize minRows={2} maxRows={5} style={{
                                        width:"98%",
                                        border:"0px",
                                        color:"black",
                                        padding:"15px",
                                        fontSize:"17px",
                                    }}>
                                    </TextareaAutosize>

                                </Box>
                                <hr color="#b81414"/>
                            </CardContent>
                            <div style={{
                                display:"flex",
                                justifyContent:"end",
                                marginBottom:"15px"
                            }}>
                                <CardActions>
                                    <Button variant="contained" size="large">Зберегти зміни</Button>
                                </CardActions>
                            </div>
                        </div>
                </div>
                <div style={{
                    backgroundColor:"#e0ffff"
                }}>
                    <Box padding={"6%"} width={"25rem"}>
                        <Typography  gutterBottom variant="h5" component="div">
                            Видимість
                        </Typography>
                        <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >

                            <FormControlLabel value="female" control={<Radio />} label="Опублікувати" />
                            <FormControlLabel value="male" control={<Radio />} label="Запланувати" />
                            <FormControlLabel value="other" control={<Radio />} label="Приховати" />
                        </RadioGroup>
                        
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Показати на головній" />
                        <Typography marginTop={"4%"} gutterBottom variant="h6" component="div">
                            Зображення
                        </Typography>
                        <Box height={"10rem"} width={"10rem"} component="section" sx={{ p: 5,m: 3, border: '1px dashed grey' }} style={{
                            display:'flex',
                            alignItems:'center',
                            borderRadius:"5px"
                            
                        }}>
                        <PhotoIcon></PhotoIcon>
                            <Button color="secondary" variant="raised" component="span">
                                    Завантажити зображення
                            </Button>
                        </Box>
                        
                        </FormControl>
                    </Box>
                    
                </div>

            </div>
        </Box>
    </Card>

    
  );
}