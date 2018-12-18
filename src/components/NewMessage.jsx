import React, {Component} from 'react'


class NewMessage extends Component {
    state = {
        subject: '',
        body: ''
    }

    handleSubjectChange = (event) => {
        const subject = event.target.value
        this.setState({
            subject: subject
        })
    }

    handleChange = (event) => {
        const keyName = event.target.name
        const value = event.target.value
        this.setState({
            [keyName]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addNewMessage(this.state)
    } 



    render() {
        return (
            <form class="form-horizontal well">
                <div class="form-group">
                    <div class="col-sm-8 col-sm-offset-2">
                        <h4>Compose Message</h4>
                    </div>
                </div>
                <div class="form-group">
                    <label for="subject" class="col-sm-2 control-label">Subject</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="subject" placeholder="Enter a subject" name="subject" value={this.state.subject} onChange={this.handleChange}/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="body" class="col-sm-2 control-label">Body</label>
                    <div class="col-sm-8">
                        <textarea name="body" id="body" class="form-control" value={this.state.body} onChange={this.handleChange}></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-8 col-sm-offset-2">
                        <input type="submit" value="Send" class="btn btn-primary" onClick={this.handleSubmit}/>
                    </div>
                </div>
            </form>
        )
    }

}

    





export default NewMessage