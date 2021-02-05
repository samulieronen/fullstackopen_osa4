
const dummy = (blogs) => 1

const totalLikes = (blogs) => {
	const reducer = (acc, item) => acc + item.likes
	return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
	const array = blogs.map(blog => blog.likes)
	const highest = Math.max(...array)
	return blogs.find(blog => highest === blog.likes)
}

const checker = (element, result) => {
	if (result.length > 0) {
		index = result.findIndex(elem => elem.author === element.name)
		if (index > -1) {
			result[index].blogs += 1
			return 0
		}
	}
	newElem = {
		author: element.name,
		blogs: 1
	}
	result.push(newElem)
	return 0
}

const findBiggest = (res) => {
	let biggest = res[0]
	let i = 0
	while (i < res.length) {
		if (res[i].blogs > biggest.blogs) {
			biggest = res[i]
		}
		i++
	}
	return biggest
}

const mostBlogs = (blogs) => {
let result = []
blogs.forEach(element => checker(element, result))
return findBiggest(result)
}

module.exports = {
	dummy,
	totalLikes,
	favoriteBlog,
	mostBlogs
}