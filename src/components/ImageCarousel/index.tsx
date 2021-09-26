import React, { useState, useRef } from 'react'
import {
    View,
    Image,
    FlatList,
    StyleSheet,
    useWindowDimensions,
} from 'react-native'

interface IProps {
    images: string[]
}

const ImageCarousel = ({ images }: IProps) => {
    const [activeIndex, setActiveIndex] = useState(1)
    const windowWidth = useWindowDimensions().width

    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })
    const onFlatlistUpdate = useRef(({ viewableItems }: any) => {
        console.log("🔥🚀 ===> onFlatlistUpdate ===>", viewableItems)
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0)
        }
    })

    return (
        <View style={styles.root}>
            <FlatList
                data={images}
                // keyExtractor={(_, idx) => 'key' + idx}
                renderItem={({ item }) => (
                    <Image
                        style={[styles.image, { width: windowWidth - 40 }]}
                        source={{ uri: item }}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onFlatlistUpdate.current}
            />

            <View style={styles.dots}>
                {images.map((image, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            {
                                backgroundColor:
                                    index === activeIndex
                                        ? '#c9c9c9'
                                        : '#ededed'
                            }
                        ]}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {},
    image: {
        margin: 10,
        height: 250,
        resizeMode: 'contain',
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: '#ededed',
        borderColor: '#c9c9c9',
        margin: 5,
    },
})

export default ImageCarousel

// https://stackoverflow.com/questions/48045696/flatlist-scrollview-error-on-any-state-change-invariant-violation-changing-on/57502343#_=
