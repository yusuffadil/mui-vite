import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function Root() {
    const ComplexGrid = (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid xs={12} sm container>
                    <Grid xs container direction="column" spacing={2}>
                        <Grid xs>
                            <Typography gutterBottom variant="subtitle2" component="div">
                                Congratulations John!
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                You have done 72% more sales today. Check your new badge in your profile.
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography sx={{ cursor: 'pointer' }} variant="subtitle1">
                                Show Badge
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src='https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/img/illustrations/man-with-laptop-light.png' />
                    </ButtonBase>
                </Grid>
            </Grid>
        </Paper>
    )

    const profit = (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                backgroundColor: (theme) => theme.palette.actionmode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid xs={12} sm container>
                    <Grid xs container direction="column" spacing={2}>
                        <Grid>
                            <ButtonBase sx={{ width: 32, height: 32 }}>
                                <Img alt="complex" src='https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/img/icons/unicons/chart-success.png' />
                            </ButtonBase>
                        </Grid>
                        <Grid xs>
                            <Typography gutterBottom variant="subtitle2" component="div">
                                Profit
                            </Typography>
                            <Grid xs container direction="column" spacing={1}>
                                <Typography variant="h6" gutterBottom>
                                    $12,628
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    +72.80%
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )

    const payment = (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                backgroundColor: (theme) => theme.palette.actionmode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid xs={12} sm container>
                    <Grid xs container direction="column" spacing={2}>
                        <Grid>
                            <ButtonBase sx={{ width: 32, height: 32 }}>
                                <Img alt="complex" src='https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/img/icons/unicons/paypal.png' />
                            </ButtonBase>
                        </Grid>
                        <Grid xs>
                            <Typography gutterBottom variant="subtitle2" component="div">
                                Payment
                            </Typography>
                            <Grid xs container direction="column" spacing={1}>
                                <Typography variant="h6" gutterBottom>
                                    $12,628
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    +72.80%
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )

    const transaction = (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                backgroundColor: (theme) => theme.palette.actionmode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid xs={12} sm container>
                    <Grid xs container direction="column" spacing={2}>
                        <Grid>
                            <ButtonBase sx={{ width: 32, height: 32 }}>
                                <Img alt="complex" src='https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/img/icons/unicons/cc-primary.png' />
                            </ButtonBase>
                        </Grid>
                        <Grid xs>
                            <Typography gutterBottom variant="subtitle2" component="div">
                                Transaction
                            </Typography>
                            <Grid xs container direction="column" spacing={1}>
                                <Typography variant="h6" gutterBottom>
                                    $12,628
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    +72.80%
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )

    const sales = (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                backgroundColor: (theme) => theme.palette.actionmode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid xs={12} sm container>
                    <Grid xs container direction="column" spacing={2}>
                        <Grid>
                            <ButtonBase sx={{ width: 32, height: 32 }}>
                                <Img alt="complex" src='https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/img/icons/unicons/wallet-info.png' />
                            </ButtonBase>
                        </Grid>
                        <Grid xs>
                            <Typography gutterBottom variant="subtitle2" component="div">
                                Sales
                            </Typography>
                            <Grid xs container direction="column" spacing={1}>
                                <Typography variant="h6" gutterBottom>
                                    $12,628
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    +72.80%
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={8}>
                        {ComplexGrid}
                    </Grid>
                    <Grid xs={6} md={4}>
                        {profit}
                    </Grid>
                    <Grid xs={6} md={4}>
                        {payment}
                    </Grid>
                    <Grid xs={6} md={4}>
                        {transaction}
                    </Grid>
                    <Grid xs={6} md={4}>
                        {sales}
                    </Grid>
                </Grid>
            </Box>

            <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
        </>
    )
}