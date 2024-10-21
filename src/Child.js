import React,{Component} from "react"

class Child extends Component{                                 //Mounting
    constructor(props){                                           //1
        console.log("Constructor")
        super(props);
        this.state = {
            counter : this.props.data +10,
            Product:"fetching the data ..."
        }
    }
                                                  //Updating
    static getDerivedStateFromProps(props,state){    //1          //2
        console.log("getDerivedStateFromProps")
        return {
            counter : props.data + 10
        }
    }

    shouldComponentUpdate(){                         //2
        console.log("ShouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevprops,prevstate){    //4
        console.log("getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){                            //5
        console.log("ComponentDidUpdate")
        return null
    }

    componentDidMount(){                                          //4
        console.log("ComponentDidMount")
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                this.setState({...this.state,Product:json.title})
            })

    }
    
                                                                            //Unmounting
    componentWillUnmount(){                                                     //1
        console.log("ComponentWillUnmount")
    }


    render(){                                        //3          //3
        console.log("Render")
        return(
            <>
                <h1>This is an child component</h1>
                <h2>Counter:{this.state.counter}</h2>
                <h2>Props:{this.props.data}</h2>
                <h2>ProductTitle: </h2>
                <p>{this.state.Product}</p>
            </>
            )
            }
}

export default Child

