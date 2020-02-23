import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class FormDialog extends React.Component {
    
    constructor(props){
        super(props);
        this.state=
            {
                open: true,
                user: null,
                type: null,
                description: null,
            };
    }

userChangeHandler(event){
    this.setState({
        user: event.target.value,
    });
}

typeChangeHandler(event){
    this.setState({
        type: event.target.value,
    });
}

desChangeHandler(event){
    this.setState({
        description: event.target.value,
    });
}

render(){
    const userChange = this.userChangeHandler.bind(this);
    const typeChange = this.typeChangeHandler.bind(this);
    const desChange = this.desChangeHandler.bind(this);
  const handleClickOpen = () => {
    this.setState(
        {
            open: true,
        }
    );
  };

  const handleReport = () => {
    const curPos = this.props.pos;
    const user = this.state.user;
    const type = this.state.type;
    const desc = this.state.description;

    fetch('http://hackforhumanity.appspot.com/marker/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            lat: this.props.pos.lat,
            long: this.props.pos.lng,
            user: user,
            type: type,
            description: desc,
            resolved: false
        })
    })
    this.props.postUpdate();
  };

  const handleClose = () => {
    this.props.Close();
  };
  
  return (
    <div>
      <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Report</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank you for your contribution to build a better World!
          </DialogContentText>
          <TextField
            margin="dense"
            id="user"
            label="Report User"
            type="text"
            fullWidth
            onChange={
                (e)=>{
                    userChange(e);
                }
            }
          />
          <TextField
            margin="dense"
            id="type"
            label="Type of Help"
            type="text"
            fullWidth
            onChange={
                (e)=>{
                    typeChange(e);
                }
            }
          />
          <TextField
            margin="dense"
            id="desc"
            label="Description"
            type="text"
            fullWidth
            onChange={
                (e)=>{
                    desChange(e);
                }
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleReport} color="primary">
            Report
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
    }

}

  export default FormDialog;