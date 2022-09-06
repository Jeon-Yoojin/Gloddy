import React from 'react';
import axios from 'axios';
import { TextInput, View, Text } from 'react-native';

class Search extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    value: ""
  };


  getSearchMovie = async () => {
    const ID_KEY = 'BQCw_7Qp7m3wxwOgYr7d';
    const SECRET_KEY = 'X1JscVj7aL';
    const search = this.state.value;
    try {
      if (search === "") {
        this.setState({movies: [], isLoading: false})
      } else {
        console.log(search)
        const {data: {
            items
          }} = await axios.get('https://openapi.naver.com/v1/search/movie.json',{
            params:{
              query: search,
              display: 20
            },
            headers: {
              'X-Naver-Client-Id': ID_KEY,
              'X-Naver-Client-Secret': SECRET_KEY
            }
          });

        this.setState({movies: items, isLoading: false});
      }
    } catch (error) {
      console.log(error);
    }
  };


  componentDidMount() {
    this.getSearchMovie();
  };



  handleSubmit = (e) => {
    //console.log(this.state.value)
    e.preventDefault();
    this.getSearchMovie();
  };


  render() {
    const {movies, isLoading} = this.state;


    return (<View>
      {
        isLoading
          ? (
          <Text>Loading..</Text>
            )
          : (
            <View>
              <View>
                <Text>영화 검색</Text>
                <TextInput value={this.state.value} onChange={(text)=>{this.setState({value:text})}} onSubmitEditing={this.handleSubmit} placeholder="영화를 검색해 보세요."/>
              </View>
              <View>
                {movies.map(movie => (
                	<Text>{movie.title}</Text>
                    ))
                 }
              </View>
            </View>
          )
      }
    </View>);
  }
}

export default Search;