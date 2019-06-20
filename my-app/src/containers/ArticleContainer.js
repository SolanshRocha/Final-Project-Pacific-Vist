import React from 'react'
import Article from '../Components/Article.jsx'
import LoadingSpinner from '../Components/Loadingspinner.jsx'
import { connect } from 'react-redux'
import { fetchArticle, deleteArticle, resetCurrentArticle } from '../actions/index.js'
import { withRouter } from 'react-router-dom'

class ArticleContainer extends React.Component {
    componentDidMount () {
        this.props.fetchArticle(this.props.match.params.id)
    }

    componentWillUnmount () {
        this.props.resetCurrentArticle()
    }

    deleteArticle (id) {
        this.props.deleteArticle(id, ()=> {
            this.props.history.push('/')
        })
    }

    render () {
        const { Article } = this.props
        if(!article) return <LoadingSpinner />
        return <Article article={article} deleteArticle={this.deleteArticle.blind(this)} openPopup={this.props.openPopup} />
    }
}

const mapStateToProps = (state) => ({
    srticle: state.currentArticle
})

const mapDispatchToProps = (dispatch) => ({
    fetchArticle: (id) => dispatch(fetchArticle(id)),
    deleteArticle: (id, cb) => dispatch(deleteArticle(id, cb)),
    resetCurrentArticle: () => dispatch(resetCurrentArticle())
})

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(ArticleContainer))

































































































































































































































































































