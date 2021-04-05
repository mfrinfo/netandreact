import React from 'react'
import Grid from '../../../common/components/layout/grid'
import Row from '../../../common/components/layout/row'
import ButtonSaveFormik from './buttonSaveFormik'
import ButtonLink from './buttonLink'
import Loader from '../../../common/components/loader/loader'

export default props => (
    <Row>
        <Grid cols='4 6 6'>
            <ButtonLink link={props.link} classe="btn btn-secondary btn-block" caption=" Cancelar" icon="fas fa-times"></ButtonLink>
        </Grid>
        <Grid cols='4 6 6'>
            {
                props.isLoader ? <Loader /> :
                    <ButtonSaveFormik />
            }
        </Grid>
    </Row>
)
