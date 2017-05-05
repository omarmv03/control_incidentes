import { TypedJSON, JsonObject, JsonMember} from 'typedjson-npm/src/typed-json'

@JsonObject
export class BaseModel {
  @JsonMember 
  OWNER: string;
  @JsonMember 
  OBJECT_NAME: string;
  @JsonMember 
  OBJECT_TYPE: string;
}