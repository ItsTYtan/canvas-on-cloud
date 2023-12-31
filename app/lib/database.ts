import mongoose from 'mongoose';
import User from '@/app/model/user';
import Course from '@/app/model/course';
import Folder from '@/app/model/folder';
import File from '@/app/model/file';

export default class MongoDb {
  private static DATABASE_URL : string = process.env.DATABASE_URL || "";
  private static db : MongoDb;

  private constructor() {}

  public static async getDb() {
    if (MongoDb.db) {
      return MongoDb.db;
    } else {
      await mongoose.connect(this.DATABASE_URL);
      MongoDb.db = new MongoDb();
      return MongoDb.db;
    }
  }

  /* Uses personal api key for now for development purposes */
  public getUser() : Promise<{canvas_api_key: string, courses: any}> {
    return User
      .findOne({canvas_api_key: process.env.CANVAS_API_KEY})
      .populate('courses').exec();
  }

  public getCourse(id : Number) : Promise<{_id: number, course_name: string, folders: []}> {
    return Course.findById(id).populate('folders').exec();
  }

  public getFolder(id : Number) : Promise<{_id: number, folder_name: string, files: []}> {
    return Folder.findById(id).populate('files').exec();
  }

  public searchFiles(name : string) : Promise<any> {
    return File.find({file_name: RegExp(name)}).limit(5).exec();
  }
}
