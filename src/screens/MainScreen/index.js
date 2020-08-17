/**
 * @author Eli Zhang
 * created on 8/14/2020
 * modified on 8/17/2020
 */

import React, { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import LazyImage from '../../components/LazyImage';

import { Container, Post, Header, Avatar, Name, Description, Loading, LikeIcon, ViewsIcon, LikeText, ViewsText } from './styles';

import { get_behance_feed, reset_behance_feed } from '../../redux/actions/behanceFeedAction';
import { connect } from 'react-redux';

function MainScreen({ get_behance_feed, reset_behance_feed, feedRes }) {
    const { behanceFeedRes } = feedRes;
    const [feed, setFeed] = useState([]);
    const [page, setPage] = useState(1);
    const [viewable, setViewable] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        loadPage();
    }, []);

    useEffect(() => {
        if (behanceFeedRes === null) {
            return;
        }

        setLoading(false);
        if (behanceFeedRes.projects !== null && behanceFeedRes.projects !== undefined && behanceFeedRes.projects.length > 0) {
            setPage(page + 1);
            setRefreshing(false);
            setFeed(refreshing ? behanceFeedRes.projects : [...feed, ...behanceFeedRes.projects]);
            reset_behance_feed();
        }
    }, [behanceFeedRes])

    const loadPage = async (pageNumber = page) => {
        if (loading) return;
        setLoading(true);
        await get_behance_feed(pageNumber);
    }

    async function refreshList() {
        setRefreshing(true);
        setPage(1);
        await loadPage(1);
    }

    const handleViewableChanged = useCallback(({ changed }) => {
        setViewable(changed.map(({ item }) => item.id));
    }, []);

    return (
        <Container>
            <FlatList
                key="list"
                data={feed}
                keyExtractor={item => String(item.id)}
                onViewableItemsChanged={handleViewableChanged}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 10,
                }}
                showsVerticalScrollIndicator={false}
                onRefresh={refreshList}
                refreshing={refreshing}
                onEndReachedThreshold={0.1}
                onEndReached={() => loadPage()}
                ListFooterComponent={loading && <Loading />}
                renderItem={({ item }) => (
                    <Post>
                        <Header>
                            <Avatar source={{ uri: item.owners[0].images["100"] }} />
                            <Name>{item.owners[0].display_name}</Name>
                            <LikeIcon source={require('../../assets/like.png')} />
                            <LikeText>{item.stats.appreciations}</LikeText>
                            <ViewsIcon source={require('../../assets/eye.png')} />
                            <ViewsText>{item.stats.views}</ViewsText>
                        </Header>

                        <LazyImage
                            shouldLoad={viewable.includes(item.id)}
                            smallSource={{ uri: item.covers["115"] }}
                            source={{ uri: item.covers.original }}
                        />

                        <Description>
                            {item.name}
                        </Description>
                    </Post>
                )}
            />
        </Container>
    );
}


/**
* Description: Connect MainScreen to redux state management
* 
*/
const mapStateToProps = state => {
    return {
        feedRes: state.behanceFeedReducer
    }
}

const mapDispatchToProps = {
    get_behance_feed,
    reset_behance_feed
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);