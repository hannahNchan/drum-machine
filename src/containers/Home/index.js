import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  spacer: {
    marginBottom: '1rem',
  }
}));

const App = () => {
  const classes = useStyles();
  const [opacity, setOpacity] = useState(0.4);
  const [keyPressed, setKeyPressed] = useState(null);

  useEffect(() => {
    document.onkeypress = function (e) {
      e = e || window.event;
      setKeyPressed(e.key);
      document.getElementById(e.key.toUpperCase()).play();
    };
    document.onkeyup = function(e) {
      setKeyPressed(null);
    };
  },[]);

  return(
    <div className={classes.root} id="drum-machine">
      <Grid container>
        <Grid item xs>
          <Typography variant="h1" component="h2" gutterBottom>
            Mini Drum Machine
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.spacer} id="display">
        <Grid spacing={0} item>
          <Paper style={{ filter: keyPressed === 'q' ? 'blur(0px)' : 'blur(2px)', opacity: keyPressed === 'q' ? 1 : 0.4 }} className="gradient-drum-red drum-pad">
            <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
          </Paper>
        </Grid>
        <Grid spacing={0} item>
          <Paper style={{ filter: keyPressed === 'w' ? 'blur(0px)' : 'blur(2px)', opacity: keyPressed === 'w' ? 1 : 0.4 }} className="gradient-drum-green drum-pad">
            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
          </Paper>
        </Grid>
        <Grid spacing={0} item>
          <Paper style={{ filter: keyPressed === 'e' ? 'blur(0px)' : 'blur(2px)', opacity: keyPressed === 'e' ? 1 : 0.4 }} className="gradient-drum-blue drum-pad">
            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.spacer}>
        <Grid spacing={0} item>
          <Paper style={{ filter: keyPressed === 'a' ? 'blur(0px)' : 'blur(2px)', opacity: keyPressed === 'a' ? 1 : 0.4 }} className="gradient-drum-yellow drum-pad">
            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
          </Paper>
        </Grid>
        <Grid spacing={0} item>
          <Paper style={{ filter: keyPressed === 's' ? 'blur(0px)' : 'blur(2px)', opacity: keyPressed === 's' ? 1 : 0.4 }} className="gradient-drum-white drum-pad">
            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
          </Paper>
        </Grid>
        <Grid spacing={0} item>
          <Paper style={{ filter: keyPressed === 'd' ? 'blur(0px)' : 'blur(2px)', opacity: keyPressed === 'd' ? 1 : 0.4 }} className="gradient-drum-pink drum-pad">
            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.spacer}>
        <Grid spacing={0} item>
          <Paper style={{ filter: keyPressed === 'z' ? 'blur(0px)' : 'blur(2px)', opacity: keyPressed === 'z' ? 1 : 0.4 }} className="gradient-drum-purple drum-pad">
            <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
          </Paper>
        </Grid>
        <Grid spacing={0} item>
          <Paper style={{ filter: keyPressed === 'x' ? 'blur(0px)' : 'blur(2px)', opacity: keyPressed === 'x' ? 1 : 0.4 }} className="gradient-drum-brown drum-pad">
            <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
          </Paper>
        </Grid>
        <Grid spacing={0} item>
          <Paper style={{ filter: keyPressed === 'c' ? 'blur(0px)' : 'blur(2px)', opacity: keyPressed === 'c' ? 1 : 0.4 }} className="gradient-drum-orange drum-pad">
            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
