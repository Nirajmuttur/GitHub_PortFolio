import React,{Component} from 'react'
import Link from '../Components/Links/Link';
import './Profile.css';
import List from '../Components/List/List';

class Profile extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             data:{},
             repoitories:[],
             loading:true,
             error:''
        }

    }

    async componentDidMount(){
        try {
            const profile = await fetch('https://api.github.com/users/Nirajmuttur');
            const profileJSON = await profile.json();
    
            if(profileJSON){
                const repos = await fetch(profileJSON.repos_url);
                const repoJSON = await repos.json();
                this.setState({
                    data:profileJSON,
                    repoitories:repoJSON,
                    loading:false
                })
            }
        } catch (error) {
            this.setState({
                loading:false,
                error:error.message
            })
            
        }
       
        
    }
    
    render(){
        const {data,repoitories,loading,error} = this.state;
        if(loading || error){
            return <div>{loading ? 'Loading...' : error}</div>;
        }

        const items=[
            {label:'html_url',value:<Link url={data.html_url} title='Github URL'/>},
            {label:'respos_url',value:data.repos_url},
            {label:'name:',value:data.name},
            {label:'location',value:data.location},
            {label:'email:',value:data.email},
            {label:'public_repos:',value:data.public_repos},
            {label:'created_at',value:data.created_at}
        ]
        const projects=repoitories.map(respository=>({
            label:respository.name,
            value:<Link url={respository.html_url} title='Github URL' />
        }))
        return(
            <div className="Profile-container">
                <img className="Profile-avatar" src={data.avatar_url} alt="Profile_image"></img>
                <List title='Profile' items={items}/>
                <List title='Projects' items={projects}/>
            </div>
        );
    }
}

export default Profile
