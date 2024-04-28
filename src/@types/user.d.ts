interface UserDataType {
  id: number;
  email: string;
  nickname: string | null;
  password: string | null;
  avatar: string | null;
  created_at: Date;
  updated_at: Date;
}
