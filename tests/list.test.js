const { test, expect } = require('@jest/globals')
const listHelper = require('../utils/list_helper')

describe('dummy', () => {
	test('dummy returns one',() => {
		const blogs = []

		const result = listHelper.dummy(blogs)
		expect(result).toBe(1)
	})
})

describe('total likes', () => {
	test('totalLikes should return 30', () => {
		const blogs = [
			{
				name: 'Test1',
				likes: 7
			},
			{
				name: 'Test2',
				likes: 4
			},
			{
				name: 'Test3',
				likes: 19
			}
		]
		const result = listHelper.totalLikes(blogs)
		expect(result).toBe(30)
	})

	test('totalLikes should return 23', () => {
		const blogs = [
			{
				name: 'Test2',
				likes: 4
			},
			{
				name: 'Test3',
				likes: 19
			}
		]
		const result = listHelper.totalLikes(blogs)
		expect(result).toBe(23)
	})

	test('totalLikes should return 0', () => {
		const blogs = []
		const result = listHelper.totalLikes(blogs)
		expect(result).toBe(0)
	})
})

describe('favoriteBlog', () => {
	test('favoriteBlog should return blog with 19 likes', () => {
		const blogs = [
			{
				name: 'Test1',
				likes: 2
			},
			{
				name: 'Test2',
				likes: 19
			},
			{
				name: 'Test3',
				likes: 4
			}
		]
		const result = listHelper.favoriteBlog(blogs)
		expect(result).toEqual(blogs[1])
	})
	test('favoriteBlog, two blogs w/ 19 likes', () => {
		const blogs = [
			{
				name: 'Test1',
				likes: 2
			},
			{
				name: 'Test2',
				likes: 19
			},
			{
				name: 'Test3',
				likes: 19
			}
		]
		const result = listHelper.favoriteBlog(blogs)
		expect(result).toEqual(blogs[1], blogs[2])
	})
})

describe('mostBlogs', () => {
	test('Most blogs should be test1 with 3 blogs', () => {
		const blogs = [
			{
				name: 'Test1',
				likes: 2
			},
			{
				name: 'Test2',
				likes: 19
			},
			{
				name: 'Test1',
				likes: 19
			},
			{
				name: 'Test1',
				likes: 19
			}
		]
		const correct = {
			author: "Test1",
			blogs: 3
		}
		const result = listHelper.mostBlogs(blogs)
		expect(result).toEqual(correct)
	})
	test('Most blogs should be Test1 with 5 blogs', () => {
		const blogs2 = [
			{
				name: 'Test1',
				likes: 2
			},
			{
				name: 'Test2',
				likes: 19
			},
			{
				name: 'Test1',
				likes: 19
			},
			{
				name: 'Test1',
				likes: 19
			},
			{
				name: 'Test3',
				likes: 19
			},
			{
				name: 'Test1',
				likes: 19
			},
			{
				name: 'Test2',
				likes: 19
			},
			{
				name: 'Test1',
				likes: 19
			}
		]
		const correct2 = {
			author: "Test1",
			blogs: 5
		}
		const result = listHelper.mostBlogs(blogs2)
		expect(result).toEqual(correct2)
	})
})