// _NAME: Dropbox - campusCup
// _LINK: https://app.codesignal.com/company-challenges/dropbox/RMJDiTprBf5HQY3oa
// _CATEGORY: Company Challenge

// Dropbox holds a competition between schools called CampusCup. If you verify an email address from a college, university, or higher education institution, you earn 20 points toward your school's overall ranking. When a school receives at least 100 points, all of its registered members receive an additional 3 Gb of bonus space each. When the school receives at least 200 points, its registered members receive an additional 8 Gb. If the school receives at least 300 points, its members receive an additional 15 Gb. And finally, when a school receives at least 500 points, members receive an additional 25 Gb each.

// You are given n registered emails, all of them unique. Each email has the following format: "<name>@<domain>", where <name> and <domain> are non-empty strings consisting of lowercase letters and a '.'. Identical domains correspond to the same school and vice versa.

// Your task is to make a scoreboard, i.e. to sort the schools according to the amount of bonus space they each received (per student not in total). School A must be higher in the standings than school B if A received more space than B, or if they received equal number of gigabytes but the domain string of school A is lexicographically smaller than the one of school B.

// Example:
// emails = ["b@harvard.edu", "c@harvard.edu", "d@harvard.edu",
//           "e@harvard.edu", "f@harvard.edu",
//           "a@student.spbu.ru", "b@student.spbu.ru", "c@student.spbu.ru",
//           "d@student.spbu.ru", "e@student.spbu.ru", "f@student.spbu.ru",
//           "g@student.spbu.ru"]

// campusCup(emails) = ["rain.ifmo.ru", "mit.edu"]

function campusCup(emails) {

  let schools = emails.map(email => {
    let domain = email.split('@')[1]
    return domain
  })

  function createFc(arr) {

    return arr.reduce((acc, v) => {
      if (acc[v]) acc[v] += 20
      else acc[v] = 20
      return acc
    }, {})
  }

  let fc = createFc(schools)

  let rank = {}

  for (let key of Object.keys(fc)) {
    let score = fc[key]
    if (score >= 500) {
      if (rank[25]) rank[25].push(key)
      else rank[25] = [key]
    } else if (score >= 300) {
      if (rank[15]) rank[15].push(key)
      else rank[15] = [key]
    }
    else if (score >= 200) {
      if (rank[5]) rank[5].push(key)
      else rank[5] = [key]
    }
    else if (score >= 100) {
      if (rank[3]) rank[3].push(key)
      else rank[3] = [key]
    } else {
      if (rank[0]) rank[0].push(key)
      else rank[0] = [key]
    }
  }

  let output = []

  for (let key of Object.keys(rank).sort((a, b) => Number(b) - Number(a))) {
    let schools = rank[key].sort()
    output.push(...schools)

  }

  return output



}
