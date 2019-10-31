class UserService {
  static read () {
    return {
      url: 'https://api.github.com/users',
      method: 'get',
      params: {
        'since': 0,
        'per_page': 50
      }
    }
  }
}

module.exports = UserService
