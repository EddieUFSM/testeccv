import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography, TextField, FormHelperText, FormControl, IconButton, Input, Button, Link, FormControlLabel, Checkbox } from '@material-ui/core';
import InputCellphone from 'components/Inputs/cellphone'
import InputCPF from 'components/Inputs/cpf'
import PJInput from 'components/Inputs/cnpj'
import InputEmail from 'components/Inputs/email'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'
import { validateCPF } from 'validators/cpf'
import { validateEmail } from 'validators/email'
import { validateCNPJ } from 'validators/cnpj'
import { validateCellphone } from 'validators/cellphone'
import InputName from 'components/Inputs/name'
import InputLastName from 'components/Inputs/lastName'
import InputCompanyName from 'components/Inputs/companyName'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    paper: {
        minWidth: 380,
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    control: {
        padding: theme.spacing(2),
    },
    form: {
        width: '100%', // Fix IE 11 issue.

    }
}));

export default function SpacingGrid() {
    const classes = useStyles();
    const [errorEmail, setErrorEmail] = useState({ value: false, message: "" })
    const [errorCPF, setErrorCPF] = useState({ value: false, message: "" })
    const [errorCNPJ, setErrorCNPJ] = useState({ value: false, message: "" })
    const [errorCellphone, setErrorCellphone] = useState({ value: false, message: "" })
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")
    const [showPJInputs, setShowPjInputs] = useState(false)
    const [values, setValues] = useState({ email: "", textmaskCPF: undefined, textmaskCNPJ: undefined, textmaskCellphone: undefined })

    const handleChange = async (event) => {
        const value = event.target.value
        setValues({ ...values, [event.target.name]: value })

        switch (event.target.name) {

            case "textmaskCPF":
                if (value == "") {
                    setErrorCPF({ error: true, message: "CPF Requerido" })
                    console.log("erro")
                } else if (!validateCPF(event.target.value.replace(/[^0-9]/g, ''))) {
                    console.log("erro")
                    setErrorCPF({ value: true, message: "Formato de CPF inválido" })
                } else {
                    console.log("certo")
                    setErrorCPF({ value: false, message: "" })
                }
                break;

            case "textmaskCNPJ":
                if (value == "") {
                    setErrorCNPJ({ error: true, message: "CNPJ Requerido" })
                    console.log("erro")
                } else if (!validateCNPJ(event.target.value.replace(/[^0-9]/g, ''))) {
                    console.log("erro")
                    setErrorCNPJ({ value: true, message: "Formato de CNPJ inválido" })
                } else {
                    console.log("certo")
                    setErrorCNPJ({ value: false, message: "" })
                }
                break;
            case "textmaskCellphone":
                if (value == "") {
                    setErrorCellphone({ error: true, message: "celular Requerido" })
                    console.log("erro")
                } else if (!validateCellphone(event.target.value.replace(/[^0-9]/g, ''))) {
                    console.log("erro")
                    setErrorCellphone({ value: true, message: "Formato de Celular inválido" })
                } else {
                    console.log("certo")
                    setErrorCellphone({ value: false, message: "" })
                }
                break;
            case "email":
                if (value == "") {
                    setErrorEmail({ error: true, message: "email Requerido" })
                    console.log("erro")
                } else if (!validateEmail(event.target.value)) {
                    console.log("erro")
                    setErrorEmail({ value: true, message: "Formato de Email inválido" })
                } else {
                    console.log("certo")
                    setErrorEmail({ value: false, message: "" })
                }
                break;
            default:
                break;
        }
    }

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Grid item>
                        <Paper className={classes.paper} >
                            <form className={classes.form} noValidate>
                                <Typography component="h1" variant="h5">Dados Pessoais</Typography>

                                <InputEmail errorEmail={errorEmail} email={values.email} handleChange={handleChange} />
                                <InputName name={values.name} handleChange={handleChange} />
                                <InputLastName name={values.lastName} handleChange={handleChange} />
                                <InputCellphone textmask="(  )    -    " handleChange={handleChange} errorCellphone={errorCellphone} textmaskCellphone={values.textmaskCellphone} />
                                <InputCPF textmask="   .   .  - " handleChange={handleChange} errorCPF={errorCPF} textmaskCPF={values.textmaskCPF} />
                                {showPJInputs ? <Fragment>
                                    <InputCompanyName />
                                    <PJInput textmask="  .   .   /    -  " handleChange={handleChange} errorCNPJ={errorCNPJ} textmaskCNPJ={values.textmaskCNPJ} />
                                </Fragment> : ""}

                                {showPJInputs ?
                                    <FormControl fullWidth>
                                        <Button color="primary"
                                            onClick={() => {
                                                setShowPjInputs(!showPJInputs)
                                            }} size="small">
                                            <RemoveCircleOutlineIcon onClick={() => {
                                                setShowPjInputs(!showPJInputs)
                                            }} style={{ paddingRight: 10 }} /> Remover dados de Pessoa Jurídica
                                        </Button >
                                    </FormControl>
                                    :
                                    <FormControl fullWidth>
                                        <Button color="primary"
                                            onClick={() => {
                                                setShowPjInputs(!showPJInputs)
                                            }} size="small">
                                            <AddCircleOutlineIcon onClick={() => {
                                                setShowPjInputs(!showPJInputs)
                                            }} style={{ paddingRight: 10 }} /> Incluir dados Pessoa Jurídica
                                        </Button >
                                    </FormControl>
                                }

                                <FormControl >
                                    <FormControlLabel
                                        control={<Checkbox onChange={handleChange} />}
                                        label="Quero Receber e-mails com promoções"
                                    />
                                </FormControl>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    fullWidth
                                >
                                    Ir para a entrega
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
}
