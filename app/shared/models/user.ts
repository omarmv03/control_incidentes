import { TypedJSON, JsonObject, JsonMember} from 'typedjson-npm/src/typed-json'

@JsonObject
export class User {
  @JsonMember 
  id: number;
  @JsonMember 
  name: string;
  @JsonMember 
  lastname: string;
  @JsonMember 
  username: string;
  @JsonMember 
  password: string;
  @JsonMember 
  domain: string;
  @JsonMember 
  estado: boolean;
  @JsonMember 
  result: string;
}