import React from "react";

export class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: null };
  }
 handleSubmit =  async (e) => {
    e.preventDefault();
    const messageInput = document.getElementById("search");
    const message = messageInput.value;

    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({message: message})
    };
    const url = "http://localhost:3001/api/world"
    try {
        const resJson = await fetch(url, options);
        const res = await resJson.json();
        console.log("res:", res);
        this.props.setMessage(res.message);
        messageInput.value = "";
    }
    catch(err) {
        console.error(err);
    }
    

  }
  render() {
    return <form onSubmit={ this.handleSubmit }>
        <input type="text" id="search"></input>
        <input type="submit" value="Submit" />
    </form>
  }
}