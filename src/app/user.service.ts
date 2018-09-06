import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {map} from 'rxjs/operators/';
import {parseHttpResponse} from "selenium-webdriver/http";

@Injectable()
export class UserService {
  size = 8;

  constructor(private  http: Http) {
  }

  getUsers() {
    return this.http.get
    ('https://randomuser.me/api/?inc=gender,name,picture,location&results='+this.size+'&nat=gb')
      .pipe(
        map(response => response.json())
      )
      .pipe(
        map(response => response.results)
      )
      .pipe(
        map(users => {
          return users.map(user => {
            return {
              name: user.name.first + ' ' + user.name.last,
              image: user.picture.large,
              city: user.location.city,
              street: user.location.street
            }
          })
        })
      )
  }
setSize(size) {
    this.size = size
}
  // users = [
  //   {
  //     gender: "female",
  //     name: {
  //       title: "miss",
  //       first: "emma",
  //       last: "day"
  //     },
  //     location: {
  //       street: "1479 the drive",
  //       city: "glasgow",
  //       state: "norfolk",
  //       postcode: "YF3 2TL",
  //       coordinates: {
  //         latitude: "-76.0140",
  //         longitude: "123.2526"
  //       },
  //       timezone: {
  //         offset: "-1:00",
  //         description: "Azores, Cape Verde Islands"
  //       }
  //     },
  //     picture: {
  //       large: "https://randomuser.me/api/portraits/women/16.jpg",
  //       medium: "https://randomuser.me/api/portraits/med/women/16.jpg",
  //       thumbnail: "https://randomuser.me/api/portraits/thumb/women/16.jpg"
  //     }
  //   },
  //   {
  //     gender: "male",
  //     name: {
  //       title: "mr",
  //       first: "ross",
  //       last: "kim"
  //     },
  //     location: {
  //       street: "6662 rectory lane",
  //       city: "lincoln",
  //       state: "borders",
  //       postcode: "UE27 3BF",
  //       coordinates: {
  //         latitude: "76.2911",
  //         longitude: "10.9591"
  //       },
  //       timezone: {
  //         offset: "+4:00",
  //         description: "Abu Dhabi, Muscat, Baku, Tbilisi"
  //       }
  //     },
  //     picture: {
  //       large: "https://randomuser.me/api/portraits/men/75.jpg",
  //       medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
  //       thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
  //     }
  //   },
  //   {
  //     gender: "female",
  //     name: {
  //       title: "mrs",
  //       first: "kelly",
  //       last: "castillo"
  //     },
  //     location: {
  //       street: "864 church street",
  //       city: "peterborough",
  //       state: "north yorkshire",
  //       postcode: "Z25 1HD",
  //       coordinates: {
  //         latitude: "-69.0400",
  //         longitude: "75.6001"
  //       },
  //       timezone: {
  //         offset: "-12:00",
  //         description: "Eniwetok, Kwajalein"
  //       }
  //     },
  //     picture: {
  //       large: "https://randomuser.me/api/portraits/women/70.jpg",
  //       medium: "https://randomuser.me/api/portraits/med/women/70.jpg",
  //       thumbnail: "https://randomuser.me/api/portraits/thumb/women/70.jpg"
  //     }
  //   },
  //   {
  //     gender: "female",
  //     name: {
  //       title: "ms",
  //       first: "patricia",
  //       last: "fuller"
  //     },
  //     location: {
  //       street: "4702 manchester road",
  //       city: "winchester",
  //       state: "essex",
  //       postcode: "I34 7ZE",
  //       coordinates: {
  //         latitude: "-31.2168",
  //         longitude: "-2.7742"
  //       },
  //       timezone: {
  //         offset: "+9:00",
  //         description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
  //       }
  //     },
  //     picture: {
  //       large: "https://randomuser.me/api/portraits/women/85.jpg",
  //       medium: "https://randomuser.me/api/portraits/med/women/85.jpg",
  //       thumbnail: "https://randomuser.me/api/portraits/thumb/women/85.jpg"
  //     }
  //   },
  //   {
  //     gender: "female",
  //     name: {
  //       title: "mrs",
  //       first: "anna",
  //       last: "coleman"
  //     },
  //     location: {
  //       street: "5468 main road",
  //       city: "carlisle",
  //       state: "county londonderry",
  //       postcode: "AS87 2YB",
  //       coordinates: {
  //         latitude: "20.3563",
  //         longitude: "160.2641"
  //       },
  //       timezone: {
  //         offset: "+9:00",
  //         description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
  //       }
  //     },
  //     picture: {
  //       large: "https://randomuser.me/api/portraits/women/62.jpg",
  //       medium: "https://randomuser.me/api/portraits/med/women/62.jpg",
  //       thumbnail: "https://randomuser.me/api/portraits/thumb/women/62.jpg"
  //     }
  //   },
  //   {
  //     gender: "male",
  //     name: {
  //       title: "mr",
  //       first: "willie",
  //       last: "morris"
  //     },
  //     location: {
  //       street: "3914 alexander road",
  //       city: "bangor",
  //       state: "county armagh",
  //       postcode: "W65 3JB",
  //       coordinates: {
  //         latitude: "-9.3380",
  //         longitude: "-91.9647"
  //       },
  //       timezone: {
  //         offset: "+10:00",
  //         description: "Eastern Australia, Guam, Vladivostok"
  //       }
  //     },
  //     picture: {
  //       large: "https://randomuser.me/api/portraits/men/41.jpg",
  //       medium: "https://randomuser.me/api/portraits/med/men/41.jpg",
  //       thumbnail: "https://randomuser.me/api/portraits/thumb/men/41.jpg"
  //     }
  //   },
  //   {
  //     gender: "female",
  //     name: {
  //       title: "miss",
  //       first: "holly",
  //       last: "silva"
  //     },
  //     location: {
  //       street: "429 green lane",
  //       city: "lincoln",
  //       state: "shropshire",
  //       postcode: "L2C 7AJ",
  //       coordinates: {
  //         latitude: "-5.6487",
  //         longitude: "172.3200"
  //       },
  //       timezone: {
  //         offset: "-1:00",
  //         description: "Azores, Cape Verde Islands"
  //       }
  //     },
  //     picture: {
  //       large: "https://randomuser.me/api/portraits/women/3.jpg",
  //       medium: "https://randomuser.me/api/portraits/med/women/3.jpg",
  //       thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg"
  //     }
  //   },
  //   {
  //     gender: "female",
  //     name: {
  //       title: "miss",
  //       first: "abbie",
  //       last: "chambers"
  //     },
  //     location: {
  //       street: "1429 kingsway",
  //       city: "lincoln",
  //       state: "staffordshire",
  //       postcode: "OO6 0ZU",
  //       coordinates: {
  //         latitude: "-88.5130",
  //         longitude: "32.4118"
  //       },
  //       timezone: {
  //         offset: "-12:00",
  //         description: "Eniwetok, Kwajalein"
  //       }
  //     },
  //     picture: {
  //       large: "https://randomuser.me/api/portraits/women/4.jpg",
  //       medium: "https://randomuser.me/api/portraits/med/women/4.jpg",
  //       thumbnail: "https://randomuser.me/api/portraits/thumb/women/4.jpg"
  //     }
  //   }
  // ]
}
