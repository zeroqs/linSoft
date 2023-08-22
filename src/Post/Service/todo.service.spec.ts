import { HttpClient } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { of } from 'rxjs'
import { environment } from '../../environments/environment'
import { TodoDto } from '../Dto'
import { TodoService } from './todo.service'

describe('PostService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let todoService: TodoService

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'delete',
    ])
    todoService = new TodoService(httpClientSpy)
    TestBed.configureTestingModule({ providers: [TodoService] })
  })

  it('should return expected todos (HttpClient called once)', (done: DoneFn) => {
    const expectedTodos: TodoDto[] = [
      {
        id: '1',
        title: 'Title',
        description: 'description',
        completed: false,
        createdAt: '2023-08-21T15:02:57.429Z',
        name: 'Joyce Zemlak',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/848.jpg',
      },
      {
        id: '2',
        title: 'Title 2',
        description: 'description 2',
        completed: true,
        createdAt: '2023-08-21T15:02:57.429Z',
        name: 'Joyce Zemlak',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/848.jpg',
      },
    ]

    httpClientSpy.get.and.returnValue(of(expectedTodos))

    todoService.getAll().subscribe({
      next: (todos) => {
        expect(todos).withContext('expected todos').toEqual(expectedTodos)
        done()
      },
      error: done.fail,
    })
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1)
  })
  it('should create a todo', (done: DoneFn) => {
    const newTodo: TodoDto = {
      id: '3',
      title: 'New Title',
      description: 'New description',
      completed: false,
      createdAt: '2023-08-21T15:02:57.429Z',
      name: 'Joyce Zemlak',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/848.jpg',
    }

    httpClientSpy.post.and.returnValue(of(newTodo))

    todoService.create(newTodo).subscribe((createdTodo) => {
      expect(createdTodo).toEqual(newTodo)
      done()
    })

    expect(httpClientSpy.post.calls.count()).toBe(1)
  })

  it('should delete a todo', (done: DoneFn) => {
    const todoIdToDelete = '3'

    httpClientSpy.delete.and.returnValue(of({}))

    todoService.delete(todoIdToDelete).subscribe(() => {
      const deletedTodoIds = httpClientSpy.delete.calls
        .allArgs()
        .map((args) => args[0])
      expect(deletedTodoIds).toContain(
        `${environment.apiUrl}/${todoIdToDelete}`,
      )
      done()
    })

    expect(httpClientSpy.delete.calls.count()).toBe(1)
  })
})
