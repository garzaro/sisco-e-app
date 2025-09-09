/**
 * @param Backdrops - material -UI
 * **/
import {Backdrop, CircularProgress, Typography} from "@mui/material";

export default function Loader () {
    return (
        <div>
            <Backdrop
                sx={(theme) => ({color: '#d5d2d2', zIndex: theme.zIndex.drawer + 1})}
                open={open}
            >
                <div style={{ textAlign: 'center' }}> {/**position: 'absolute', top: 0, left: 0, width: '100%'**/}
                    <CircularProgress color={color={color}} /> {/**theme.palette.secondary**/}
                    <Typography>
                        <div>{titulo}</div>
                        <div>{mensagem}</div>
                    </Typography>
                </div>
            </Backdrop>
        </div>
    )
};