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
                info: props.info,
            };
        
    }



render(){
   
  const handleClickOpen = () => {
    this.setState(
        {
            open: true,
        }
    );
  };

  const handleDelete = () => {
    const curPos = this.props.pos;
    const user = this.state.user;
    const type = this.state.type;
    const desc = this.state.description;

    fetch('http://hackforhumanity.appspot.com/marker/', {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        },
    })
  };

  const handleClose = () => {
    this.props.Close();
  };
  
  console.log("props", this.props.pos)
  return (
    <div>
      <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here is the Help Info
          </DialogContentText>
          <input
            type="text"
            value={this.state.info.user}
          />
          <input
            type="text"
            value={this.state.info.user}
            
          />
          <input
            type="text"
            value={this.state.info.description}
            
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
    }

}

  export default FormDialog;